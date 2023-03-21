import { Fragment, useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	async function fetchMovieHandler() {
		setIsLoading(true);
		const response = await fetch("https://swapi.dev/api/films");
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
		setIsLoading(false);
	}

	return (
		<Fragment>
			<section>
				<button onClick={fetchMovieHandler}>Fetch Movies</button>
			</section>
			<section>
				{!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
				{isLoading && <p>Loading...</p>}
			</section>
		</Fragment>
	);
}

export default App;
