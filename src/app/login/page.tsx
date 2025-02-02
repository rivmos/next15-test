import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

import React from 'react'

const LoginPage = () => {
  return (
    <main className=" h-dvh flex flex-col items-center justify-center gap-6 text-2xl">
        <h1>nikka-bill</h1>
        <Button>
            <LoginLink>Sign In</LoginLink>
        </Button>
    </main>
  )
}

export default LoginPage