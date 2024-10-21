export interface UserDTO {
  email: string;
  name: string;
  providerId: string;
  providerType: string;
  emails?: string[];
  state?: string;
  photo: string;
  role?: string;
}
