import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
	const { items } = props;

	const sortedList = useMemo(() => {
		console.log("Items Sorting");
		return items.sort((a, b) => a - b);
	}, [items]);

	console.log("DemoList Running");

	return (
		<div className={classes.list}>
			<h2>{props.title}</h2>
			<ul>
				{sortedList.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default React.memo(DemoList);
