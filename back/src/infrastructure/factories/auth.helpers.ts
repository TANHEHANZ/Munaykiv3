import { PrismaClient } from "@prisma/client";
import { GoogleProfileDTO } from "./auth.dto";

const prisma = new PrismaClient();

export function emailProfile(profile: any): string | null {
  return profile?.emails?.[0]?.value ?? null;
}

export async function createUserGoogle(
  googleProfile: GoogleProfileDTO,
  done: Function
) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: googleProfile.email },
    });

    if (existingUser) {
      console.log("existe El user", existingUser);

      return done(null, existingUser);
    }

    const newUser = await prisma.user.create({
      data: {
        email: googleProfile.email,
        name: googleProfile.name,
        providerId: googleProfile.providerId,
        providerType: googleProfile.providerType,
      },
    });
    console.log("nuevo user", newUser);

    return done(null, newUser);
  } catch (error) {
    console.error("Error al autenticar o crear usuario:", error);
    return done(error);
  }
}
