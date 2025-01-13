import { getMealById } from "../../../../utils/getData.ts"
import { useState } from "react"

interface IngredientType {
    ingredient: string
    measure: string
}

interface Meal {
    idMeal: string
    strMeal: string
    strMealThumb: string
    strArea: string | null
    strCategory: string | null
    strSource: string | null
    strYoutube: string | null
    strInstructions: string | null
    ingredients: IngredientType[]
    totalIngredients: number
}

export const useGetMeal = () => {
    const [meal, setMeal] = useState<Meal | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const getMeal = (id: string) => {
        getMealById(id)
            .then(data => {
                if (data === false) setMeal(null)
                else {
                    // Filtrar y contar las propiedades de strIngredient que no están vacías 
                    const ingredients = Object.keys(data).filter(key => key.startsWith('strIngredient') && data[key])
                        .map((key, index) => ({
                            ingredient: data[key],
                            measure: data[`strMeasure${index + 1}`] || ''
                        }))
                        .filter(item => item.ingredient && item.measure.trim());

                    const totalIngredients = ingredients.length;

                    setMeal({
                        ...data,
                        ingredients,
                        totalIngredients
                    })
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }



    return {
        meal,
        getMeal,
        isLoading
    }
}