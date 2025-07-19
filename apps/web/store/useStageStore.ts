import { create } from "zustand";


type StageStore = {
  stage: boolean;
  toggleStage: () => void;
};

export const useStageStore = create<StageStore>((set) => ({
  stage: false, 
  toggleStage: () => set((state) => ({ stage: !state.stage })),
}));