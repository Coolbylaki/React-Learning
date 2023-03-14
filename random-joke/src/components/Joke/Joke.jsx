import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

import classes from "./Joke.module.css";

const Joke = (props) => {
	const [joke, setJoke] = useState("");
	const [showJoke, setShowJoke] = useState(false);

	const fetchData = async () => {
		const response = await fetch("https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } });
		const result = await response.json();
		setJoke(result.joke);

		if (!showJoke) {
			setShowJoke(true);
		}
	};

	return (
		<Card>
			<h1>Do you want to hear a joke?</h1>
			{showJoke && <p className={classes.joke}>{joke}</p>}

			<Button type="button" onClick={fetchData}>
				{showJoke ? "Get Another" : "Get Joke"}
			</Button>
		</Card>
	);
};

export default Joke;
