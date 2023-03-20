import MyParagraph from "./MyParagraph";
import { memo } from "react";

const DemoOutput = (props) => {
	console.log("Demo Output!");

	return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default memo(DemoOutput);
