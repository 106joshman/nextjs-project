import axios from "axios";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await axios(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const showData = res.data.results;
  // console.log(showData);

  return (
    <main className="pt-10">
      <div className="">
        {showData.map((items, index) => (
          <div className="" key={index}>
            {items.original_title}
          </div>
        ))}
      </div>
    </main>
  );
}
