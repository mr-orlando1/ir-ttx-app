// frontend/src/store/useAppStore.ts
import { create } from 'zustand';

interface AppState {
  theme: 'light' | 'dark';
  socketConnected: boolean;
  caps: any[];
  setTheme: (t: 'light' | 'dark') => void;
  setSocketConnected: (c: boolean) => void;
  addCap: (cap: any) => void;
  resetCaps: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'light',
  socketConnected: false,
  caps: [],
  setTheme: (theme) => set({ theme }),
  setSocketConnected: (socketConnected) => set({ socketConnected }),
  addCap: (cap) => set((s) => ({ caps: [...s.caps, cap] })),
  resetCaps: () => set({ caps: [] }),
}));
