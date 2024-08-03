import { create } from "zustand";

const useZustand = create((set) => ({
  dialog: null,
  setDialog: (dialog) => set({ dialog }),
  resetDialog: () => set({ dialog: null }),
}));

export default useZustand;
