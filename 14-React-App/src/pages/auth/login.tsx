import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";
import { useToast } from "@/components/ui/use-toast";

import { loginAccount } from "@/utils/apis/auth/api";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const body = {
        email,
        password,
      };

      const result = await loginAccount(body);
      localStorage.setItem("token", result.payload.token);
      toast({
        description: result.message,
      });
      navigate("/");
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
      <form className="flex flex-col gap-3" onSubmit={(e) => handleLogin(e)}>
        <Input
          placeholder="mail@domain.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </Layout>
  );
};

export default Login;
