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

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 bg-white/90 z-50">
      <nav className="mx-auto flex container items-center justify-between p-6 ">
        <Link className="text-xl tracking-widest" to="/">
          Library App
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/history-borrow">History Borrow</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/login">Login</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/register">Register</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

export default Navbar;
