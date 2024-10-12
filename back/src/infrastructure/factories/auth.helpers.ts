import { UserDTO } from "./auth.dto";

export function verification(profile: any): UserDTO {
  const email = profile?.emails?.[0]?.value || profile?.email || null;
  const name = profile?.displayName || profile?.name || "Nombre desconocido";
  const providerId = profile?.id;

  const userDTO = {
    email: email!,
    name: name,
    providerId: providerId,
    providerType: profile.providerType,
  };

  return userDTO;
}
