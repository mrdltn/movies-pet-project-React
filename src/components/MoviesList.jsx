import { MovieItem } from './MovieItem';

function MoviesList(props) {
    const { movies = [] } = props;

    return (
        <div className='movies'>
            {movies.length ? (
                movies.map((movie) => (
                    <MovieItem key={movie.imdbID} {...movie} />
                ))
            ) : (
                <h3>Nothing found, try to search another movie</h3>
            )}
        </div>
    );
}

export { MoviesList };
