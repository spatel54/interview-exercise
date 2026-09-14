import { create } from "zustand";

interface PrototypeState {
  count: number;
  notes: string;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setNotes: (notes: string) => void;
}

export const usePrototypeStore = create<PrototypeState>((set) => ({
  count: 0,
  notes: "",
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setNotes: (notes) => set({ notes }),
}));
