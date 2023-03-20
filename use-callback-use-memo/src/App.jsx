import { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";
import DemoList from "./components/Demo/DemoList";

function App() {
	const [showParagraph, setShowParagraph] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false);
	const [listTitle, setListTitle] = useState("My List");

	console.log("App Running!");

	const toggleParagraphHandler = useCallback(() => {
		if (allowToggle) {
			setShowParagraph((prevShowParagraph) => !prevShowParagraph);
		}
	}, [allowToggle]);

	const changeTitleHandler = useCallback(() => {
		setListTitle("New Title");
	}, []);

	const allowToggleHandler = useCallback(() => {
		setAllowToggle(true);
	}, []);

	const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

	return (
		<div className="app">
			<DemoList title={listTitle} items={listItems} />
			<DemoOutput show={showParagraph} />
			<Button onClick={changeTitleHandler}>Change List Title</Button>
			<Button onClick={allowToggleHandler}>Allow Toggling!</Button>
			<Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
		</div>
	);
}

export default App;
