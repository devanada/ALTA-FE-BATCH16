import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";

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
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  /*
   * useEffect(() => {}, [])
   * mirip dengan componentDidMount, artinya dia hanya dijalankan sekali pada saat component telah dimuat pertama kali
   *
   * useEffect(() => {}, [state1, state2, state3, ....])
   * mirip dengan componentDidMount dan componentDidUpdate, artinya dia dijalankan sekali pada saat component telah dimuat, setelah itu akan berjalan kembali ketika nilai dari variabel/state yang ditulis didalam dependencies ([]) itu berubah
   *
   * useEffect(() => {})
   * side effect akan jalan secara terus menerus kalau penulisannya tanpa scope ([])
   *
   * useEffect(() => {
   *  return () => {
   *    ...
   *  }
   * })
   * side effect akan dijalankan setiap waktu (mirip dengan penulisan useEffect tanpa scope), namun dia akan berhenti/unsubscribe ketika kita meninggalkan/berpindah halaman, dengan harap agar performa dari web/aplikasi tetap terjaga karena tidak ada proses berjalan dibalik layar. Contoh implementasi di real scenario adalah OTP (ada perhitungan mundur yang dijalankan setiap detik), ataupun status online. useEffect ini sendiri mirip dengan componentDidMount + componentDidUpdate + componentWillUnmount
   */

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
        <Button
          type="button"
          variant="outline"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </Button>
      </form>
    </Layout>
  );
};

export default Login;
