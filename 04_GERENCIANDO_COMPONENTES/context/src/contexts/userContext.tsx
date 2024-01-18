import { createContext, useState } from "react";

interface UserContextProps {
    nome: string
    loginName: string
    save: (user: string) => void
}
export const UserContext = createContext<UserContextProps | undefined>(undefined)

export default function UserContextProvider({ children }: any) {

    const [loginName, setLoginName] = useState<string>("")

    const contextValue = {
        nome: "John",
        loginName: loginName,
        save: saveLoginUserToCache
    }

    function saveLoginUserToCache(user: string) {
        if (user !== ""){
            setLoginName(user)
        }
    }

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}