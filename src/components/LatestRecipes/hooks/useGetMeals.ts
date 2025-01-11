import { useState, useEffect } from "react"
import { getMealByArea } from "../../../utils/getData.ts"


export const useGetMeals = (area: string) => {
    const [meals, setMeals] = useState([])


    useEffect(() => {
        if (!area) return 
        
        getMealByArea(area)
            .then(res => {
                setMeals(res)
            })
    }, [area])


    return {
        meals
    }
}
