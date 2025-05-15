"use client";

import { useRouter } from "next/navigation";
import ProtectedRoute from "../../components/ProtectedRoute";
import { logOut } from "../../lib/authHelpers";

import { Button } from "../../components/LogoutButton";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await logOut();
    router.push("/login");
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to your Dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </ProtectedRoute>
  );
}
