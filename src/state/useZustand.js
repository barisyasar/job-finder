// useZustand
import { create } from "zustand";

const useZustand = create((set) => ({
  // dialogs
  dialog: null,
  setDialog: (dialog) => set({ dialog }),
  resetDialog: () => set({ dialog: null }),

  // user
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useZustand;
