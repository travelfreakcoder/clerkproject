// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "@clerk/clerk-react";

//  const PrivateRouter=()=>{

//   const {isSignedIn}=useAuth()

//   return isSignedIn ? <Outlet/> : <Navigate to="/signin"/>
// }


// export default PrivateRouter

import { RedirectToSignIn, useAuth } from '@clerk/clerk-react';
import { Outlet } from 'react-router-dom';

export const PrivateRouter = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <Outlet />;
};