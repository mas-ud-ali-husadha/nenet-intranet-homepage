export interface UserInterface {
  id?: number;
  name: string;
  username?: string;
  avatar: string;
  birthday?: string;
  fallback: string;
  social: {
    whatsapp: string;
    linkedin: string;
    discord: string;
  };
}
