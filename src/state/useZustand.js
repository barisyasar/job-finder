// useZustand
import { create } from "zustand";

const useZustand = create((set) => ({
  // dialogs
  dialog: null,
  setDialog: (dialog) => set({ dialog }),
  resetDialog: () => set({ dialog: null }),

  // user data
  user: null,
  tokenType: null,
  accessToken: null,
  refreshToken: null,

  setAuthData: (authData) =>
    set(() => ({
      user: authData.user,
      tokenType: authData.tokenType,
      accessToken: authData.accessToken,
      refreshToken: authData.refreshToken,
    })),

  clearAuthData: () =>
    set(() => ({
      user: null,
      tokenType: null,
      accessToken: null,
      refreshToken: null,
    })),
}));

export default useZustand;
