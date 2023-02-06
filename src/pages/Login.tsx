import React from "react";

// TODO firebase
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };
  return (
    <div>
      <p>Sign in with Google</p>
      <button onClick={signInWithGoogle} className="btn">
        Sign In
      </button>
    </div>
  );
};

export default Login;
