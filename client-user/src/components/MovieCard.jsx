import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movies/${movie?.slug}`}
      className="link-detail"
    >
        <img src={movie?.imgUrl} alt={movie?.title} className="row-poster" />
        {/* <h2 className="poster-title">{movie?.title}</h2> */}
    </Link>
  )
}

export default MovieCard