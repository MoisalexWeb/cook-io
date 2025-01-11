import { createContext } from "react";
import { useState } from "react";

interface FilterContextProps { 
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    meals: Array,
    setMeals: React.Dispatch<React.SetStateAction<[]>>
}

export const FilterContext = createContext<FilterContextProps | undefined>(undefined);


interface FilterProviderProps { 
    children: ReactNode
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
    // para abrir y cerrar el accordion
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Para saber si esta haciendo la peticion y mostrar el skeleton
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Estado con las recetas
    const [meals, setMeals] = useState<[]>([])
    

    return (
        <FilterContext.Provider value={{
            isOpen,
            setIsOpen,
            isLoading,
            setIsLoading,
            meals,
            setMeals
        }}>
            {children}
        </FilterContext.Provider>
    )
}