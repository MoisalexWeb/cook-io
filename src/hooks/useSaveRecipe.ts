import { useState, useEffect } from "react"
import { getMealById } from "../utils/getData.ts"

export const useSaveRecipe = ( id: string ) => {
    const [isSaved, setIsSaved] = useState<boolean>(false)

    const saveRecipe = () => {
        if (localStorage.getItem(`cookio-recipe-${id}`)) {
            localStorage.removeItem(`cookio-recipe-${id}`)
            setIsSaved(false)
        }
        else {
            getMealById(id)
            .then(res => {
                setIsSaved(true)
                localStorage.setItem(`cookio-recipe-${id}`, JSON.stringify(res))
            })
        }
    }

    useEffect(() => {
        if (localStorage.getItem(`cookio-recipe-${id}`)) {
            setIsSaved(true)
        }
    }, [id])

    

    return {
        isSaved,
        saveRecipe
    }
}