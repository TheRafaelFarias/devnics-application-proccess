export interface User {
  id: number;
  updated_at: string;
  created_at: string;
  name: string;
  email: string;
}

export interface BearerToken {
  type: "bearer";
  token: string;
}

export interface AuthResponse {
  user: User;
  token: BearerToken;
}
