"use client"
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

const SignOut = () => {
    const router = useRouter()

    const handleSignOut = async () =>{
        await authClient.signOut()
        router.push("/sign-in")
    }
  return (
    <div>
        <Button onClick={handleSignOut}>Sign out</Button>
    </div>
  )
}

export default SignOut