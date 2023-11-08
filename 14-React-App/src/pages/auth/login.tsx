import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";

const Login = () => {
  return (
    <Layout>
      <form action="">
        <Input placeholder="mail@domain.com" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>Login</Button>
      </form>
    </Layout>
  );
};

export default Login;
