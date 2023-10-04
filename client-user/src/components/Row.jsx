import MovieCard from "./MovieCard"

const Row = ({ title, movies }) => {

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className="row-posters">
        {movies?.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <div>
            <h3>Movies is empty</h3>
          </div>
        )}
      </div>
    </div>
  )
}

export default Row