import React from "react";
// import { ImSpinner9 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="pt10 flex min-hscreen justify-center">
      <img src="Spinner.svg" alt="loading..." className="h-96" srcset="" />
      {/* <ImSpinner9 height={384} className="animate-spin h96 text-amber-600" /> */}
    </div>
  );
}
