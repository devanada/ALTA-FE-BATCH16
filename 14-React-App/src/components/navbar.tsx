import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

import useTheme from "@/utils/hooks/useTheme";
import { useToken } from "@/utils/contexts/token";

const Navbar = () => {
  const { token, user, changeToken } = useToken();
  const [toggleTheme] = useTheme();
  const { toast } = useToast();

  function handleLogout() {
    changeToken();
    toast({
      description: "Logout Successfully",
    });
  }

  return (
    <header className="w-full sticky top-0 bg-white/90 dark:bg-black/90 z-50">
      <nav className="mx-auto flex container items-center justify-between p-6 ">
        <Link className="text-xl tracking-widest" to="/">
          Library App
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={user.profile_picture} alt={user.full_name} />
              <AvatarFallback>LA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44" align="end">
            {token && (
              <>
                <DropdownMenuLabel>Hi! {user.full_name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/history-borrow">History Borrow</Link>
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuItem onClick={() => toggleTheme()}>
              Change Theme
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {token ? (
              <DropdownMenuItem onClick={() => handleLogout()}>
                Logout
              </DropdownMenuItem>
            ) : (
              <>
                <DropdownMenuItem asChild>
                  <Link to="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/register">Register</Link>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

export default Navbar;
