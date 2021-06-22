import { User } from "../../models/users";

export const setUser = (user: User) => ({
    type: 'SET_USER',
})