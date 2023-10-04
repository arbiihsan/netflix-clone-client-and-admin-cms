import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../stores/actions/actionCreator";
import { Link, useParams } from "react-router-dom";
import URLFormatter from "../helpers/URLFormatter";
import ReactSpinner from "../components/ReactSpinner";

const DetailsMovie = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  const { movie, movieLoading } = useSelector((state) => state.movie);
  const { slug } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieById(slug));
  }, [dispatch, slug]);

  if (movieLoading) {
    return (
      <ReactSpinner />
    )
  }

  return (
    <>
      <div className="main-container">
        <div className="container">
          <div className="header">
            <Link to="/" className="logo">
              <span className="icon material-symbols-outlined me-2">arrow_forward_ios</span>
            </Link>
          </div>
          <div className="content">
            {
              showTrailer ? (
                <div className="trailer">
                  <div className="trailer-video">
                    <iframe
                      className="trailer-iframe"
                      src={URLFormatter(movie.trailerUrl)}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : (
                <>
                  <div className="movie-image">
                    <img src={movie.imgUrl} alt="" className="image" />
                  </div>
                </>
              )
            }
            <div className="grid-container">
              <div className="movie-details">
                <div className="details-header">
                  <h1 className="movie-title">{movie.title}</h1>
                  <button
                    className="details-button"
                    onClick={() => setShowTrailer(!showTrailer)}
                  >
                    <span>{showTrailer ? "Hide" : "See"} Trailer</span>
                  </button>
                </div>
                <div className="genre-rating">
                  <div className="rating">
                    <span>Rating:</span>
                    <span className="rating-value">{movie.rating}</span>
                  </div>
                  <div className="genre">
                    <span>Genre:</span>
                    <span className="genre-name">
                      {movie.Genre?.name}
                    </span>
                  </div>
                </div>
                <div className="overview">
                  <div className="overview-header">
                    <h3 className="overview-title">Synopsis</h3>
                    <hr className="overview-divider" />
                  </div>
                  <p className="overview-text">{movie.synopsis}</p>
                </div>
                <div className="casts">
                  <div className="casts-header">
                    <h3 className="casts-title">Casts</h3>
                    <hr className="casts-divider" />
                  </div>
                  <div className="casts-list">
                    {movie?.Casts?.map((cast) => (
                      <div
                        className="cast-item"
                        key={cast.id}
                      >
                        <div className="cast-image">
                          <img
                            src={cast.profilePict}
                            alt={`${cast.name}`}
                          />
                        </div>
                        <span className="cast-name">{cast.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default DetailsMovie