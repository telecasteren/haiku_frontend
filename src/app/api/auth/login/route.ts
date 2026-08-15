import { compare } from "bcrypt";
import { cookieOptions } from "@/lib/auth/config";
import { createSession } from "@/lib/auth/session";
import { getUserByEmail } from "@/lib/helpers/getUserByEmail";
import { loginSchema } from "@/lib/zod/loginSchema";
import { updateLastLogin } from "@/lib/helpers/updateLastLogin";

export async function POST(request: Request) {
  const body = await request.json();

  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ errors: parsed.error.flatten().fieldErrors }),
      {
        status: 400,
      },
    );
  }

  const { email, password } = parsed.data;
  const user = await getUserByEmail(email);

  if (!user) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
    });
  }

  if (user.status !== "active") {
    return new Response(JSON.stringify({ error: "Account is inactive" }), {
      status: 403,
    });
  }

  const passwordMatch = await compare(password, user.passwordHash);
  if (!passwordMatch) {
    return new Response(JSON.stringify({ error: "Invalid credentials" }), {
      status: 401,
    });
  }

  await updateLastLogin(user.id);

  const { passwordHash: _passwordHash, ...safeUser } = user;
  const token = await createSession(user.id);

  return new Response(JSON.stringify(safeUser), {
    status: 200,
    headers: {
      "Set-Cookie": `session=${token}; ${cookieOptions}`,
    },
  });
}
