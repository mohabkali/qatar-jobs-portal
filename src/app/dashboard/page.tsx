"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function DashboardPage() {
  const { user, isSignedIn } = useUser();
  const params = useSearchParams();
  const role = params.get("role");

  useEffect(() => {
    const saveToDatabase = async () => {
      if (!isSignedIn || !user || !role) return;

      try {
        const res = await fetch("/api/users/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.emailAddresses[0].emailAddress,
            role,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to save user in DB");
        }

        const json = await res.json();
        console.log("User saved:", json);
      } catch (err) {
        console.error("DB error:", err);
      }
    };

    saveToDatabase();
  }, [isSignedIn, user, role]);

  return <div className="p-6">Welcome to your dashboard!</div>;
}