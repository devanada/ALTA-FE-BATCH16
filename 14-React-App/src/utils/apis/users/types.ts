export interface Profile {
  id: number;
  full_name: string;
  email: string;
  role: string;
  profile_picture: string;
  address: string;
  phone_number: string;
  password?: string;
}

export interface ProfilePayload {
  full_name: string;
  email: string;
  address: string;
  phone_number: string;
  password: string;
}
