import { create } from "zustand";


type ContactStore= {
  contact: boolean;
  toggleContact: () => void;
};

export const useContact = create<ContactStore>((set) => ({
  contact: false, 
  toggleContact: () => set((state) => ({ contact: !state.contact })),
}));