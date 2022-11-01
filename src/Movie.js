import PropTypes from "prop-types";

const Movie = ({ id, year, title, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h3 className="movie__year">개봉연도: {year}</h3>
        <p>
          장르:{" "}
          {genres.map((genre, index) =>
            index === genres.length - 1 ? (
              <span key={index}>{genre}</span>
            ) : (
              <span key={index}>{genre}, </span>
            )
          )}
        </p>
        <p className="movie__summary">
          줄거리:{" "}
          {summary.length > 300 ? (
            <span>{summary.slice(0, 300)} ...</span>
          ) : (
            <span>{summary}</span>
          )}
        </p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
