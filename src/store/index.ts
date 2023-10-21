import { create } from "zustand";

type State = {
  visible: boolean;
};

type Actions = {
  toggleVisible: (visible: boolean) => void;
};

export const useStore = create<State & Actions>((set) => ({
  visible: true,
  toggleVisible: (visible: boolean) => set(() => ({ visible })),
}));
