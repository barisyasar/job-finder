import { create } from "zustand";
import { persist } from "zustand/middleware";

const useZustand = create(
  persist(
    (set) => ({
      // dialogs
      dialog: null,
      setDialog: (dialog) => set({ dialog }),
      resetDialog: () => set({ dialog: null }),

      // Jobs
      page: 1,
      perPage: 10,
      orderByField: null,
      orderByDirection: null,
      searchField: "name",
      searchQuery: "",

      setPage: (page) => set({ page }),
      setPerPage: (perPage) => set({ perPage }),
      setOrderByField: (orderByField) => set({ orderByField }),
      setOrderByDirection: (orderByDirection) => set({ orderByDirection }),
      setSearchQuery: (searchQuery) => set({ searchQuery }),

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
