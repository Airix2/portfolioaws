import React, { useContext, useReducer } from "react";

import { projects } from "../data";

const AppContext = React.createContext();

const emptyState = {
	selectedProject: 0,
	selectedImg: 0,
	project: projects[0],
	isLoading: false,
	modal: {
		src: "",
	},
	modalVisible: false,
};

function reducer(state, action) {
	console.log("reducing");
	switch (action.type) {
		case "CHANGE_PROJECT": {
			const type = action.payload;
			let index = state.selectedProject;
			if (type === "next") {
				index++;
				if (index === projects.length) index = 0;
			} else if (type === "prev") {
				index--;
				if (index === -1) index = projects.length - 1;
			}
			return {
				...state,
				selectedProject: index,
				project: projects[index],
				selectedImg: 0,
			};
		}
		case "CHANGE_IMAGE": {
			const btnClicked = action.payload;
			let index = state.selectedImg;
			if (btnClicked === "next") {
				index++;
				if (index === projects[state.selectedProject].imgAmount)
					index = 0;
			} else if (btnClicked === "prev") {
				index--;
				if (index === -1)
					index = projects[state.selectedProject].imgAmount - 1;
			}
			return {
				...state,
				selectedImg: index,
			};
		}
		case "UPDATE_LOADING": {
			return {
				...state,
				isLoading: action.payload,
			};
		}
		case "UPDATE_MODAL": {
			const src = action.payload;
			return {
				...state,
				modal: { src },
				modalVisible: true,
			};
		}
		case "UPDATE_MODAL_VISIBILITY": {
			console.log("updating");
			const visibility = action.payload;
			return { ...state, modalVisible: visibility };
		}
		default:
			return state;
	}
}

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, emptyState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
