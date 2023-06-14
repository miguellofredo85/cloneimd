
export default function Result({results}) {
  console.log(results);
  return (
    <div className="grid grid-cols-4">
      {results.map((movie) =>(
        <div key={movie.title}>
          <h3>{movie.original_title}</h3>
        </div>
      ) )}
    </div>
  )
}
