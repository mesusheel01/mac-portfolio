import { create } from 'zustand';

type Section = 'hero' | 'projects' | 'contact';

export const useSectionStore = create<{
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}>((set) => ({
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
}));
