import { useState } from "react";
import { Link } from "react-router-dom";

const Banner = ({ movie }) => {

  return (
    <header
      className='banner'
      style={{
        background: "cover",
        backgroundImage: `url("${movie?.imgUrl}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title}
        </h1>
        <div className="banner-buttons">
          <Link
            to={`/movies/${movie?.slug}`}
            className="link-detail"
          >
            <button className='banner-button'>Play</button>
          </Link>
          <Link
            to={`/movies/${movie?.slug}`}
            className="link-detail"
          >
            <button className='banner-button'>More Info</button>
          </Link>
        </div>
        <h1 className="banner-description">
          {movie?.synopsis}
        </h1>
      </div>

      <div className="banner-fadeBottom" />
    </header>
  )
}

export default Banner