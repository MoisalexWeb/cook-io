import { FormEvent } from "react"
import { useFilterContext } from "../../../context/useFilterContext.ts"


export const useHandleForm = () => {
    const { handleArea, handleCategory, handleName, closeFilter} = useFilterContext()

        
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const searchInput = formData.get('search') as string
        const searchData = searchInput.replace(/\s+/g, "%")
        const selectedArea = formData.get('area') as string
        const selectedCategory = formData.get('category') as string

        if (searchData.length > 0) handleName(searchData)
        else if (selectedArea) handleArea(selectedArea)
        else if (selectedCategory) handleCategory(selectedCategory)
        
        // Cerrando el filtro si se esta en mobile y esta abierto
        closeFilter()
    }

    const formReset = (idForm: string) => {
        const form = document.getElementById(idForm) as HTMLFormElement
        form.reset()
    }

    return {
        handleSubmit,
        formReset
    }
}
