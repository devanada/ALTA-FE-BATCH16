import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";

import { registerAccount } from "@/utils/apis/auth";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  async function onSubmitRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const body = {
        full_name: fullName,
        email,
        password,
        role: "user",
        address,
        phone_number: phoneNumber,
      };

      const result = await registerAccount(body);
      toast({
        description: result.message,
      });
      navigate("/login");
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Layout>
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => onSubmitRegister(e)}
      >
        <Input
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button type="submit">Register</Button>
      </form>
    </Layout>
  );
};

export default Register;
