import { Fragment, Component } from "react";
import UsersContext from "../store/users-context";
import classes from "./UserFinder.module.css";
import Users from "./Users";

class UserFinder extends Component {
	static contextType = UsersContext;

	constructor() {
		super();
		this.state = {
			filteredUsers: [],
			searchTerm: "",
		};
	}

	componentDidMount() {
		// Send http request...
		this.setState({ filteredUsers: this.context.users });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm)),
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
