import { useEffect } from "react"
import "./Recipes.scss"
import { FilterBar } from "../../FilterBar/FilterBar.tsx"
import { SkeletonRecipeCard } from "../../SkeletonRecipeCard/SkeletonRecipeCard.tsx"
import { RecipeCard } from "../../RecipeCard/RecipeCard.tsx"
import { useParams } from "react-router-dom"
import { useFilterContext } from "../../../context/useFilterContext.ts"

type MealItem = {
    idMeal: string
    strMeal: string
    strMealThumb: string
}

export const Recipes = () => {
    const { areaName, categoryName } = useParams()
    const { openFilter, meals, setMeals, handleArea, handleCategory, isLoading } = useFilterContext()
    

    useEffect(() => {
        setMeals([])

        if (areaName) {
            handleArea(areaName)
            console.log(areaName)
        }

        if (categoryName) {
            handleCategory(categoryName)
            console.log(categoryName)
        }
        
    }, [areaName, categoryName])

    return (
        <section className="recipes">


            <FilterBar />


            <div className="recipes__content">
                <div className="recipes__content__header">
                    <h2 className="recipes__content__header-title">Recipes</h2>

                    <button
                        className="recipes__content__header__filter"
                        onClick={openFilter}
                    >
                        <i className='bx bx-filter'></i>
                        Filters
                    </button>
                </div>

                <div className="recipes__container">
                    {(isLoading)
                        ?
                        Array.from({ length: 10 }).map((_, index) => (
                            <SkeletonRecipeCard key={index} />
                        ))
                        : (meals.length > 0)
                            ? meals.map((meal: MealItem) => (
                                <RecipeCard
                                    key={meal.idMeal}
                                    id={meal.idMeal}
                                    name={meal.strMeal}
                                    image={meal.strMealThumb}
                                />
                            ))
                            : <p className="recipes__container-notFound">No recipes found!</p>
                    }
                </div>
            </div>
        </section>
    )
}
