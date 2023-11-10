import { FormEvent, useEffect, useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";

import {
  Profile,
  deleteProfile,
  getProfile,
  updateProfile,
} from "@/utils/apis/users";
import Alert from "@/components/alert";

const EditProfile = () => {
  const { toast } = useToast();

  const [profile, setProfile] = useState<Partial<Profile>>({
    full_name: "",
    email: "",
    address: "",
    phone_number: "",
    password: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getProfile();
      setProfile(result.payload);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function handleUpdateProfile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = {
      full_name: profile.full_name ?? "",
      email: profile.email ?? "",
      password: profile.password ?? "",
      address: profile.address ?? "",
      phone_number: profile.phone_number ?? "",
    };

    try {
      const result = await updateProfile(body);
      toast({
        description: result.message,
      });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function handleDeleteProfile() {
    try {
      const result = await deleteProfile();
      toast({
        description: result.message,
      });
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
        className="flex flex-col gap-4 items-center"
        onSubmit={(e) => handleUpdateProfile(e)}
      >
        <Input
          placeholder="Full Name"
          value={profile?.full_name}
          onChange={(e) =>
            setProfile((prevState) => {
              return { ...prevState, full_name: e.target.value };
            })
          }
        />
        <Input
          placeholder="Email"
          value={profile?.email}
          onChange={(e) =>
            setProfile((prevState) => {
              return { ...prevState, email: e.target.value };
            })
          }
        />
        <Input
          placeholder="Password"
          value={profile?.password}
          onChange={(e) =>
            setProfile((prevState) => {
              return { ...prevState, password: e.target.value };
            })
          }
        />
        <Input
          placeholder="Address"
          value={profile?.address}
          onChange={(e) =>
            setProfile((prevState) => {
              return { ...prevState, address: e.target.value };
            })
          }
        />
        <Input
          placeholder="Phone Number"
          value={profile?.phone_number}
          onChange={(e) =>
            setProfile((prevState) => {
              return { ...prevState, phone_number: e.target.value };
            })
          }
        />
        <Button type="submit">Submit</Button>
        <Alert
          title="Are you absolutely sure?"
          description="This action cannot be undone. This will permanently delete your account an you cannot use your email again."
          onAction={() => handleDeleteProfile()}
        >
          <Button type="button" variant="destructive">
            Delete Account
          </Button>
        </Alert>
      </form>
    </Layout>
  );
};

export default EditProfile;
