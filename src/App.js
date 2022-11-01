import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  setLoading = () => {
    this.setState((state) => ({ isLoading: !state.isLoading }));
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    // ?
  };

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate() {
    // console.log('컴포넌트 업데이트 된후 실행')
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Now loading ...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
