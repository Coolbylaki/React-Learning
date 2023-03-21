import { Fragment, Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
	{ id: "u1", name: "Max" },
	{ id: "u2", name: "Manuel" },
	{ id: "u3", name: "Julie" },
];

class UserFinder extends Component {
	constructor() {
		super();
		this.state = {
			filteredUsers: DUMMY_USERS,
			searchTerm: "",
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: DUMMY_USERS.filter((user) => user.name.includes(this.state.searchTerm)),
			});
		}
	}

	searchChangeHandler(event) {
		const value = event.target.value;
		this.setState({ searchTerm: value });
	}

	render() {
		return (
			<Fragment>
				<div className={classes.finder}>
					<input type="search" onChange={this.searchChangeHandler.bind(this)} />
				</div>
				<Users users={this.state.filteredUsers} />
			</Fragment>
		);
	}
}

export default UserFinder;
