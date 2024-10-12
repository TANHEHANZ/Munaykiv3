  export interface UserDTO {
    email: string;
    name: string;
    providerId: string;
    providerType: string;
    emails?: string[];
    state?: string;
    role?: string;
  }
