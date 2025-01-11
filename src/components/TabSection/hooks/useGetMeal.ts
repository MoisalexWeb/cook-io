import { useState, useEffect } from "react"
import { getMealByCategory } from "../../../utils/getData.ts"


export type Categories = "Seafood" | "Pasta" | "Breakfast" | "Vegetarian" | "Starter"


export const useGetMeal = () => {
    const [category, setCategory] = useState<Categories>("Seafood")
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setIsLoading(true)
        getMealByCategory(category)
            .then(res => {
                setMeals(res)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [category])

    return {
        category,
        setCategory,
        meals,
        isLoading
    }
}
