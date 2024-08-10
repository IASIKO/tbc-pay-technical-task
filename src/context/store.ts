import { create } from "zustand";

type State = {
	route: "home" | "name" | "password" | "email" | "success";
};

type Actions = {
	actions: {
		changeRoute: (newRoute: State["route"]) => void;
	};
};

export const useRouteStore = create<State & Actions>((set) => ({
	route: "home",
	actions: {
		changeRoute: (newRoute) => set(() => ({ route: newRoute })),
	},
}));
