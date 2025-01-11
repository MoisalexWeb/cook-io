import { useContext } from "react"
import { FilterContext } from "./filterContext.tsx"
import { getMealByArea, getMealByCategory, getMealByName } from "../utils/getData.ts";

export const useFilterContext = () => {
    const context = useContext(FilterContext);

    if (!context) {
        throw new Error("useFilterContext must be used within a FilterProvider");
    }

    const { isOpen, setIsOpen, isLoading, setIsLoading, meals, setMeals } = context

    // Funcion para abrir y cerrar los acordeones
    const ToggleAccordion = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const target = event.target as HTMLElement;
        const button = target.closest('button') as HTMLButtonElement;

        if (button.getAttribute('aria-expanded') === 'true') {
            button.setAttribute('aria-expanded', 'false');
        } else {
            button.setAttribute('aria-expanded', 'true');
        }
    }

    // Funcion para abrir y cerrar el filtro
    const openFilter = () => setIsOpen(true);

    const closeFilter = () => setIsOpen(false)



    // Funcion para traer las recetas por categoria
    const handleCategory = (category: string) => {
        setIsLoading(true)

        getMealByCategory(category)
            .then(data => {
                if (data) {
                    setMeals(data)
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // Funcion para traer las recetas por area
    const handleArea = (area: string) => {
        setIsLoading(true)

        getMealByArea(area)
            .then(data => {
                if (data) {
                    setMeals(data)
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    // Funcion para traer las recetas por nombre al escribir en el input
    const handleName = (name: string) => {
        setIsLoading(true)

        getMealByName(name)
            .then(data => {
                if (data) {
                    setMeals(data)
                } else {
                    setMeals([])
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }





    return {
        isOpen,
        ToggleAccordion,
        openFilter,
        closeFilter,
        isLoading,
        meals,
        setMeals,
        handleCategory,
        handleArea,
        handleName
    }
}
