import SignOut from "@/components/SignOut";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function  Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!session){
    redirect("/sign-in")
  }
  console.log(session)
  

  return (
    <div className="p-2">
      <Card className={`max-w-xl mx-auto p-4`}>
        <CardTitle>User Info</CardTitle>
        <CardContent>
          <h1>{session.user.name}</h1>
          <h1>{session.user.email}</h1>
          <SignOut />
        </CardContent>
      </Card>
    </div>
  );
}
