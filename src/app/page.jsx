export const dynamic = "force-dynamic"; 

import Result from "@/components/Result";

const api_key = process.env.API_KEY

export default async function Home({searchParams}) {

  const genre = searchParams.genre || 'fetchTrending';

  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated'? "movie/top_rated"
  :"trending/all/week"}?api_key=${api_key}&language=en-US&page=1`, {next: {revalidate: 10000}});
    
  if (!res.ok) {
    throw new Error("Not fetching data")    
  }
  const data = await res.json()
  const results = data.results


  return (
    <div>
      <Result results={results}/>
    </div>
  )
}
