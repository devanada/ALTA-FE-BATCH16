export interface BodyRegister {
  full_name: string;
  email: string;
  password: string;
  address: string;
  phone_number: string;
}

export interface BodyLogin {
  email: string;
  password: string;
}
