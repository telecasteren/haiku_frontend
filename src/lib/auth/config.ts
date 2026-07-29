const maxAge = 60 * 60 * 24 * 7; // 7 days
const isProduction = process.env.NODE_ENV === "production";

export const cookieOptions = `HttpOnly; ${isProduction ? "Secure; " : ""}SameSite=Strict; Max-Age=${maxAge}; Path=/`;
