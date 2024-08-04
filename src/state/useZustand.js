import { create } from "zustand";
import { persist } from "zustand/middleware";

const useZustand = create(
  persist(
    (set) => ({
      // dialogs
      dialog: null,
      setDialog: (dialog) => set({ dialog }),
      resetDialog: () => set({ dialog: null }),

      // user data (persisted)
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
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
      partialize: (state) => ({
        user: state.user,
        tokenType: state.tokenType,
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    }
  )
);

export default useZustand;
