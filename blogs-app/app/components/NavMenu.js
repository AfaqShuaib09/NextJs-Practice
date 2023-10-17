"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Fragment } from "react";

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <Fragment>
        {session?.user?.name} <br />
        <button className="btn btn-primary" onClick={() => signOut()}>
          Sign out
        </button>
      </Fragment>
    );
  }
  return (
    <>
      Not Signed in <br />
      <button className="btn btn-primary" onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
}

export default function NavMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <AuthButton />
      </div>
    </nav>
  );
}
