import "./SavedRecipes.scss"
import { useSavedRecipes } from "./hooks/useSavedRecipes.ts"
import { RecipeCard } from "../../RecipeCard/RecipeCard.tsx"


interface RecipeItem {
    idMeal: string
    strMeal: string
    strMealThumb: string
}

export const SavedRecipes = () => {
    const { savedRecipes } = useSavedRecipes()

    return (
        <section className="saved container">
            <h1 className="saved-title">All saved recipes</h1>

            <div className="saved__container">
                {
                    savedRecipes.length > 0
                        ? savedRecipes.map((recipe: RecipeItem) => (
                            <RecipeCard
                                key={recipe.idMeal}
                                id={recipe.idMeal}
                                name={recipe.strMeal}
                                image={recipe.strMealThumb}
                            />
                        ))
                        : <h2 className="saved-no-recipes">There are no saved recipes!</h2>
                }
            </div>
        </section>
    )
}
