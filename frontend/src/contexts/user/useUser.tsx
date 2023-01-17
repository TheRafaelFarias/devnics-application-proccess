import { useContext } from "react"
import { AuthContext } from "."

export const useUser = () => {
    const context = useContext(AuthContext)

    return context
}