import { Fragment, useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMovieHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(
				"https://react-http-practice-1f254-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
			);

			// Use Axios instead because it will generate own error's for catch block
			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const data = await response.json();

			const loadedMovies = [];

			for (const key in data) {
				loadedMovies.push({
					id: key,
					title: data[key].title,
					openingText: data[key].openingText,
					releaseDate: data[key].releaseDate,
				});
			}

			// const transformedMovies = data.map((movieData) => {
			// 	return {
			// 		id: movieData.episode_id,
			// 		title: movieData.title,
			// 		openingText: movieData.opening_crawl,
			// 		releaseDate: movieData.release_date,
			// 	};
			// });

			setMovies(loadedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMovieHandler();
	}, [fetchMovieHandler]);

	async function addMovieHandler(movie) {
		const response = await fetch(
			"https://react-http-practice-1f254-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
			{
				method: "POST",
				body: JSON.stringify(movie),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const data = await response.json();

		console.log(data);
	}

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
				<AddMovie onAddMovie={addMovieHandler} />
			</section>
			<section>
				<button onClick={fetchMovieHandler}>Fetch Movies</button>
			</section>
			<section>{content}</section>
		</Fragment>
	);
}

export default App;
