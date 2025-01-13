import { useEffect, useState } from "react"

interface RecipeItem { 
    idMeal: string
    strMeal: string
    strMealThumb: string 
}

export const useSavedRecipes = () => {
    const [savedRecipes, setSavedRecipes] = useState<RecipeItem[]>([])

    useEffect(() => {
        const recipes = Object.keys(localStorage)
            .filter(item => item.startsWith("cookio-recipe-"))
            .map((recipe) => {
                const itemFromStorage = localStorage.getItem(recipe);
                return itemFromStorage ? JSON.parse(itemFromStorage) : null;
            })
            .filter(recipe => recipe !== null)


        if (recipes !== null) {
            setSavedRecipes(recipes)
        }
    }, [])


    return {
        savedRecipes
    }
}
