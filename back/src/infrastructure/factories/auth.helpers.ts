import { UserDTO } from "./auth.dto";

export function verification(profile: any): UserDTO {
  const email = profile?.emails?.[0]?.value || profile?.email || null;
  const name = profile?.displayName || profile?.name.givenName || "Nombre desconocido";
  const providerId = profile?.id;
  const photo = profile?.photos?.[0].value || "No tiene foto";
  const providerType = profile.provider || "No se halla el proveedor";

  const userDTO = {
    email,
    name,
    photo,
    providerId,
    providerType,
  };

  return userDTO;
}
