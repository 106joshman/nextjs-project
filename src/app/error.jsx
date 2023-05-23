"use client";
import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-red-500">Wahala! Wahala!! Wahala!!!</h1>
      <div className="bttn">
        <button className="mt-5 p-3 hover:text-amber-600 bg-emerald-700 rounded-md" onClick={() => reset()}>Try Again!</button>
      </div>
    </div>
  );
}
