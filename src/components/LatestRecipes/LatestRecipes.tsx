import "./LatestRecipes.scss"
import { RecipeCard } from "../RecipeCard/RecipeCard.tsx"
import { SkeletonRecipeCard } from "../SkeletonRecipeCard/SkeletonRecipeCard.tsx"
import { useGetMeals } from "./hooks/useGetMeals.ts"
import { Link } from "react-router-dom"



type Categories = "Chinese" | "Italian"


interface Props {
    title: string
    area: Categories
}



export const LatestRecipes: React.FC<Props> = ({ title, area }) => {
    const { meals } = useGetMeals(area)

    interface MealItem {
        idMeal: string
        strMeal: string
        strMealThumb: string
    }

    return (
        <section className="latestRecipes container">
            <h2 className="latestRecipes-title">{title}</h2>

            <ul className="latestRecipes__ul">

                {
                    meals.length > 0
                        ?
                        <>
                            {meals.slice(0, 6).map((meal: MealItem) => (
                                <li key={meal.idMeal}>
                                    <RecipeCard
                                        id={meal.idMeal}
                                        name={meal.strMeal}
                                        image={meal.strMealThumb}
                                    />
                                </li>
                            ))}
                            <li>
                                <Link to={`recipes/area/${area}`} className="show-more-item">
                                    show more
                                    <i className='bx bx-chevrons-right'></i>
                                </Link>
                            </li>
                        </>
                        : Array.from({ length: 6 }).map((_, index) => (
                            <SkeletonRecipeCard
                                key={index}
                            />
                        ))
                }

            </ul>
        </section>
    )
}
