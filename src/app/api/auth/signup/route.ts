import { cookieOptions } from "@/lib/auth/config";
import { createUser } from "@/lib/helpers/createUser";
import { signupSchema } from "@/lib/zod/signupSchema";
import { createSession } from "@/lib/auth/session";

export async function POST(request: Request) {
  const body = await request.json();

  const parsed = signupSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ errors: parsed.error.flatten().fieldErrors }), {
      status: 400,
    })
  }

  const { confirmPassword: _confirmPassword, ...userInput } = parsed.data;

  try {
    const user = await createUser(userInput);
    const { passwordHash: _passwordHash, ...safeUser } = user;
    const token = await createSession(user.id);

    return new Response(JSON.stringify(safeUser), {
      status: 201,
      headers: {
        "Set-Cookie": `session=${token}; ${cookieOptions}`,
      } });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Signup failed";
    const status = message === "Email already exists" ? 409 : 500;
    return new Response(JSON.stringify({ error: message }), { status });
  }
}
