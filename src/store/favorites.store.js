import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      isFavorite: (id) => {
        const { favorites } = get();
        return favorites.includes(id);
      },
      toggleFavorite: (id) => {
        const { favorites } = get();
        const exists = favorites.includes(id);
        if (exists) {
          set({ favorites: favorites.filter((favId) => favId !== id) });
        } else {
          set({ favorites: [...favorites, id] });
        }
      },
      counter: () => {
        const { favorites } = get();
        return favorites.length;
      },
    }),
    {
      name: "favorite-storage",
    }
  )
);
