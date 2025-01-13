import "./Detail.scss"
import { useParams } from "react-router-dom"
import { useGetMeal } from "./hooks/useGetMeal.ts"
import { useEffect } from "react"
import { RecipeDetailCard } from "../../RecipeDetailCard/RecipeDetailCard.tsx"
import { SkeletonRecipeDetailCard } from "../../SkeletonRecipeDetailCard/SkeletonRecipeDetailCard.tsx"



export const Detail = () => {
    const { recipeId } = useParams();
    const { getMeal, meal, isLoading } = useGetMeal()


    useEffect(() => {
        if (recipeId) {
            getMeal(recipeId)
        }
    }, [recipeId])
    

    return (
        <section className="detail container">
            {
                isLoading && <SkeletonRecipeDetailCard />
            }

            {
                (meal && isLoading === false)
                    ? <RecipeDetailCard
                        id={meal.idMeal}
                        name={meal.strMeal}
                        image={meal.strMealThumb}
                        area={meal.strArea}
                        category={meal.strCategory}
                        article={meal.strSource}
                        ingredients={meal.ingredients}
                        instructions={meal.strInstructions}
                        totalIngredients={meal.totalIngredients}
                        youtube={meal.strYoutube}
                    />
                    : (isLoading)
                        ? <></>
                        : <h2 className="not-found">Recipe not found!</h2>
            }
        </section>
    )
}
