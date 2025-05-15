"use client";

import { useState } from "react";
import { signIn } from "../../lib/authHelpers";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "../../../components/ui/label";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      router.push("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-bold">Login</h2>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} className="w-full mt-4">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

{
  /* <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 underline">
            Signup
          </a> */
}
