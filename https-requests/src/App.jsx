import { Fragment, useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMovieHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch("https://swapi.dev/api/films/");

			// Use Axios instead because it will generate own error's for catch block
			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const data = await response.json();

			const transformedMovies = data.results.map((movieData) => {
				return {
					id: movieData.episode_id,
					title: movieData.title,
					openingText: movieData.opening_crawl,
					releaseDate: movieData.release_date,
				};
			});
			setMovies(transformedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMovieHandler();
	}, [fetchMovieHandler]);

	let content = <p>Found no movies.</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<Fragment>
			<section>
				<button onClick={fetchMovieHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</Fragment>
	);
}

export default App;
