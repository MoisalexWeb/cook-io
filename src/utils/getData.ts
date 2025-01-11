export const getMealByCategory = async (category: string) => {
    try {
        const peticion = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        
        if (peticion.ok) {
            const data = await peticion.json()
            return data.meals
        } else {
            return false
        }
    }
    catch (error) {
        console.log(error)
        return false
    }
}

export const getMealByArea = async ( area: string ) => {
    try {
        const peticion = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        
        if (peticion.ok) {
            const data = await peticion.json()
            return data.meals
        } else {
            return false
        }
    }
    catch (error) {
        console.log(error)
        return false
    }
}

export const getMealById = async ( id: string ) => {
    try {
        const peticion = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        
        if (peticion.ok) {
            const data = await peticion.json()
            if (data.meals) {
                return data.meals[0]
            }
            return false
        } else {
            return false
        }
    }
    catch (error) {
        console.log(error)
        return false
    }
}

export const getMealByName = async ( name: string ) => {
    try {
        const peticion = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        
        if (peticion.ok) {
            const data = await peticion.json()
            return data.meals
        } else {
            return false
        }
    }
    catch (error) {
        console.log(error)
        return false
    }
}