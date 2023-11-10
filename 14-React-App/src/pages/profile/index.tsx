import { useEffect, useState } from "react";

import Layout from "@/components/layout";
import { useToast } from "@/components/ui/use-toast";
import { Profile, getProfile } from "@/utils/apis/users";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { toast } = useToast();

  const [profile, setProfile] = useState<Profile>();

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

  return (
    <Layout>
      <div className="flex flex-col gap-4 items-center">
        <figure className="w-60 h-60">
          <img
            className="aspect-square rounded-full object-cover"
            src={profile?.profile_picture}
            alt={profile?.full_name}
          />
        </figure>
        <p className="font-bold text-2xl">{profile?.full_name}</p>
        <p>{profile?.email}</p>
        <p>{profile?.address}</p>
        <p>{profile?.phone_number}</p>
        <Button>Edit Profile</Button>
      </div>
    </Layout>
  );
};

export default Index;
