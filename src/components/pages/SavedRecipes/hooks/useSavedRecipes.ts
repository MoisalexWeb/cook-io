import { useEffect, useState } from "react"

export const useSavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState([])

    useEffect(() => {
        const recipes = Object.keys(localStorage)
            .filter(item => item.startsWith("cookio-recipe-"))
            .map(recipe => JSON.parse(localStorage.getItem(recipe)))

            console.log(recipes)
        setSavedRecipes(recipes)
    }, [])


    return {
        savedRecipes
    }
}
