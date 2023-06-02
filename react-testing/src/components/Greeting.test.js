import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
	test("renders Hello World as a text", () => {
		// Arrange
		render(<Greeting />);

		// Act
		// ... nothing

		// Assert
		const helloWorldElement = screen.getByText("Hello World", {
			exact: false,
		});
		expect(helloWorldElement).toBeInTheDocument();
	});

	test("renders 'It's good to see you!' if the button was NOT clicked", () => {
		// Arrange
		render(<Greeting />);

		// Act
		// ... nothing

		// Assert
		const outputElement = screen.getByText("good to see you", { exact: false });
		expect(outputElement).toBeInTheDocument();
	});

	test("renders 'Changed!' if the button was clicked", async () => {
		// Arrange
		render(<Greeting />);

		// Act
		const user = userEvent.setup();
		await user.click(screen.getByRole("button"));

		// Assert
		const outputElement = screen.getByText("Changed!");
		expect(outputElement).toBeInTheDocument();
	});

	test("does not render 'It's good to see you!' if button was clicked", async () => {
		// Arrange
		render(<Greeting />);

		// Act
		const user = userEvent.setup();
		await user.click(screen.getByRole("button"));

		// Assert
		const outputElement = screen.queryByText("it's good to see you", { exact: false });
		expect(outputElement).not.toBeInTheDocument();
	});
});
