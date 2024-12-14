"use client";

import { useState } from "react";
import SignUpPage from "../components/SignUpPage";
import SignInPage from "@/components/SignInPage";

const User = () => {
  const [signIn, setSignIn] = useState<boolean>(false);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            {!signIn ? <SignUpPage setSignIn={setSignIn} /> : <SignInPage />}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
