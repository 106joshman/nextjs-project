"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
    setSearch(search);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5 flex-1"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
        placeholder="Search Keywords...."
      />
      <button
        type="submit"
        disabled={!search}
        className="text-amber-600 disabled:cursor-not-allowed disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
