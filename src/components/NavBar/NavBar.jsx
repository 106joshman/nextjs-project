import React from "react";
import NavbarItem from "./NavbarItem";

export default function NavBar() {
  return (

      <div className="">
        <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
          <NavbarItem title="Trending" param="fetchTrending" />
          <NavbarItem title="Top Rated" param="fetchTopRated" />
        </div>
      </div>

  );
}
