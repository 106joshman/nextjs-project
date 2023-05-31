import Results from "@/components/Results/Results";
import axios from "axios";
import React from "react";

export default async function SearchPage({ params }) {
  const res = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&page=1&include_adult=false`
  );

  if (!res.ok) {
    new Error("Wahala!!!!!!!");
  }

  const data = res.data.results;
  return (
    <div>
      {data && data.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {data && <Results showData={data} />}
    </div>
  );
}