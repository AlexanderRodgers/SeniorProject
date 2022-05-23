export type AuthUser = {
  id: string;
  aud: string; // this should probably be an enum.
  role: string; // enum as well.
  email: string;
  phone: string;
  confirmation_sent_at: Date;
  recovery_sent_at: Date;
  app_metadata: {
      provider: string,
      providers: string[];
  },
  created_at: Date;
  updated_at: Date; 
}