import { useEffect, useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
	// eslint-disable-next-line no-unused-vars
	const [state, setState] = useState(globalState);

	const dispatch = (actionIdentifier, payload) => {
		const newState = actions[actionIdentifier](globalState, payload);
		globalState = { ...globalState, ...newState };

		for (const listener of listeners) {
			listener(globalState);
		}
	};

	useEffect(() => {
		if (shouldListen) {
			listeners.push(setState);
		}

		return () => {
			if (shouldListen) {
				listeners = listeners.filter((listener) => listener !== setState);
			}
		};
	}, [shouldListen]);

	return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
	if (initialState) {
		globalState = { ...globalState, ...initialState };
	}

	actions = { ...actions, ...userActions };
};
