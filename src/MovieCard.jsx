const MovieCard = ({ movies: { imdbID, Year, Poster, Title, Type } }) => (
  <div className="movie" key={imdbID}>
    <div className="year">
      <p>{Year}</p>
    </div>
    <div className="img-movie">
      <img
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
        alt={Title}
      />
    </div>
    <div className="type-movie">
      <span>{Type}</span>
      <h3 className="title-movie">{Title}</h3>
    </div>
  </div>
);

export default MovieCard;
