"use client";

import { useState } from "react";
import { signUp } from "@/lib/authHelpers";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      router.push("/dashboard"); // or home page
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-bold">Sign Up</h2>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleSignUp} className="w-full mt-4">
              Sign Up
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

//  <p className="mt-4 text-center">
//           Don't have an account?{" "}
//           <a href="/login" className="text-blue-600 underline">
//             Login
//           </a>
//         </p>
