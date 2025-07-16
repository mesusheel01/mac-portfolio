import { create } from "zustand";


type DockStore = {
    activeSelection : string;
    setActiveSelection : (selection: string)=>void; 
}

export const useDockStore = create<DockStore>((set)=> ({
    activeSelection: 'home',
    setActiveSelection : (selection) => set({activeSelection : selection})
}))