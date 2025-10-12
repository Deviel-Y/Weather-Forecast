import { create } from "zustand";

interface UserStore {
 user: { name: string };
 setUser: (userName: string) => void;
}

const useUserQuery = create<UserStore>((set) => ({
 user: { name: "" },
 setUser: (userName) => set({ user: { name: userName } }),
}));

export default useUserQuery;
