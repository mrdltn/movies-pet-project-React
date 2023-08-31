import { MovieItem } from "./MovieItem";

function MoviesList(props) {
    const {movies} = props;

    return <div className="movies">
        {movies.map(movie => (
            <MovieItem key={movie.imdbID} {...movie} />
        ))}
    </div>
}


export {MoviesList}