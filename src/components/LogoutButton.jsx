"use client";

import { logOut } from "../../lib/authHelpers";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logOut();
    router.push("/login");
  };

  return (
    <Button onClick={handleLogout} className="mt-4">
      Logout
    </Button>
  );
}
