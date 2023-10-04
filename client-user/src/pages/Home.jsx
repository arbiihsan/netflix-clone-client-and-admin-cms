import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../stores/actions/actionCreator";
import Banner from "../components/Banner"
import Row from "../components/Row"
import ReactSpinner from "../components/ReactSpinner";


const Home = () => {
  const { movies, moviesLoading } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    // console.log(movies);
  }, [dispatch]);

  if (moviesLoading) {
    return (
      <ReactSpinner />
    )
  }

  return (
    <div className='homeScreen'>
      <Banner movie={movies[0]} />
      <Row movies={movies} title="Top Rated" />
      <Row movies={movies} title="Trending Now" />
      <Row movies={movies} title="Netflix Originals" />
    </div>
  )
}

export default Home