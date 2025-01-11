import { useState, useEffect } from "react"


export const useSetTheme = () => {
    type Theme = "light" | "dark" 

    const storagedTheme = localStorage.getItem("data-theme") as Theme | null

    const [theme, setTheme] = useState<Theme>((storagedTheme) ? storagedTheme : "light")

    const changeTheme = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("data-theme", theme)
    }, [theme])

    return {
        theme,
        changeTheme
    }
}
