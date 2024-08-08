import { create } from "zustand";

type State = {
  route: string;
};

type Actions = {
  actions: {
    changeRoute: (newRoute: string) => void;
  };
};

export const useRouteStore = create<State & Actions>((set) => ({
  route: "main",
  actions: {
    changeRoute: (newRoute) => set(() => ({ route: newRoute })),
  },
}));
