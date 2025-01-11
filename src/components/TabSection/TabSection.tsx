import "./TabSection.scss"
import { RecipeCard } from "../RecipeCard/RecipeCard.tsx"
import { TabBtn } from "../TabBtn/TabBtn.tsx"
import { useGetMeal } from "./hooks/useGetMeal.ts"
import { SkeletonRecipeCard } from "../SkeletonRecipeCard/SkeletonRecipeCard.tsx"
import { Link } from "react-router-dom"


export const TabSection = () => {
    const { category, setCategory, meals, isLoading } = useGetMeal()

    interface MealItem {
        idMeal: string
        strMeal: string
        strMealThumb: string
    }


    return (
        <section className="tabSection container">
            <div className="tabSection__buttons">
                <TabBtn
                    category="Seafood"
                    textBtn="SeaFood"
                    state={category}
                    setState={() => setCategory("Seafood")}
                />

                <TabBtn
                    category="Pasta"
                    textBtn="Pasta"
                    state={category}
                    setState={() => setCategory("Pasta")}
                />

                <TabBtn
                    category="Breakfast"
                    textBtn="Breakfast"
                    state={category}
                    setState={() => setCategory("Breakfast")}
                />

                <TabBtn
                    category="Vegetarian"
                    textBtn="Vegetarian"
                    state={category}
                    setState={() => setCategory("Vegetarian")}
                />

                <TabBtn
                    category="Starter"
                    textBtn="Starter"
                    state={category}
                    setState={() => setCategory("Starter")}
                />
            </div>

            <div className="tabSection__grid">
                {
                    isLoading
                        ? Array.from({ length: 12 }).map((_, index) => (
                            <SkeletonRecipeCard key={index} />
                        ))
                        : (
                            <>
                                {
                                    meals.slice(0, 12).map((meal: MealItem) => (
                                        <RecipeCard
                                            key={meal.idMeal}
                                            id={meal.idMeal}
                                            name={meal.strMeal}
                                            image={meal.strMealThumb}
                                        />
                                    ))
                                }
                                <Link to={`recipes/category/${category}`} className="show-more">show more</Link>
                            </>
                        )
                }
            </div>

        </section >
    )
}
