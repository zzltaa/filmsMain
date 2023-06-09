import { Movie } from "./Movie";

function Movies(props) {
    const { movies=[] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID}{...movie} />)
            ) : (
                    <img mr-100 width="1050"  src=" https://labrika.ru/static/upload/03/56/03569c9d99f17582dd6ae082a913fc9b.png" />
            )}
        </div>
    );
}

export {Movies};
