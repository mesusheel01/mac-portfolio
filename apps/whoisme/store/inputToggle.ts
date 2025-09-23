import { create } from "zustand";

type InputToggleState = {
  isInput: boolean;
  setIsInput: () => void;
};

const useInputToggle = create<InputToggleState>((set) => ({
  isInput: false,
  setIsInput: () => set((state) => ({ isInput: !state.isInput })),
}));

export default useInputToggle;
