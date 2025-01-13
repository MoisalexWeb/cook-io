import "./RecipeDetailCard.scss"
import { useSaveRecipe } from "../../hooks/useSaveRecipe.ts"
import { Link } from "react-router-dom"

interface IngredientType {
    ingredient: string
    measure: string
}

interface Ingredient {
    ingredient: string
    measure: string
}

interface Props {
    id: string
    name: string
    image: string
    area: string | null
    category: string | null
    article: string | null
    youtube: string | null
    instructions: string | null
    ingredients: IngredientType[]
    totalIngredients: number
}



export const RecipeDetailCard: React.FC<Props> = ({ id, name, image, area, category, ingredients, instructions, totalIngredients, article, youtube }) => {
    const { isSaved, saveRecipe } = useSaveRecipe(id)

    return (
        <article className="detailCard">
            <figure className="detailCard__figure">
                <img src={image} alt={name} className="detailCard__figure-img" />
            </figure>

            <div className="detailCard__content">
                <div className="detailCard__header">
                    <h2 className="detailCard__header-title">{name}</h2>

                    <button
                        className="detailCard__header-btn"
                        onClick={saveRecipe}
                    >
                        {
                            isSaved
                                ? <>Unsave <i className="bx bxs-bookmark-star"></i></>
                                : <>Save <i className="bx bx-bookmark"></i></>
                        }
                    </button>
                </div>

                <div className="detailCard__ingredients">
                    <p className="detailCard__ingredients-title">Ingredients: {totalIngredients}</p>

                    <ul className="detailCard__ingredients__ul">
                        {
                            ingredients.map((item: Ingredient, index) => (
                                <li key={`${item.ingredient}${index}`}>{`${item.ingredient} ${item.measure}`}</li>
                            ))
                        }
                    </ul>
                </div>

                <p className="detailCard-instructions">
                    {instructions}
                </p>

                <div className="detailCard__links">
                    {
                        article &&
                        <a href={article} target="_blank" rel="noopener" className="detailCard__links-link">
                            Read more
                            <i className='bx bx-link-alt'></i>
                        </a>
                    }
                    {
                        youtube &&
                        <a href={youtube} target="_blank" rel="noopener" className="detailCard__links-link">
                            Watch a video
                            <i className='bx bxl-youtube' ></i>
                        </a>
                    }
                </div>

                <div className="detailCard__buttons">
                    {area && <Link className="detailCard__buttons-btn" to={`/recipes/area/${area}`}>{area}</Link>}
                    {category && <Link className="detailCard__buttons-btn" to={`/recipes/category/${category}`}>{category}</Link>}
                </div>
            </div>

        </article>
    )
}

// [
//     { ingredient: 'Bulgur Wheat', measure: '25g' },
//     { ingredient: 'Lamb Mince', measure: '500g' },
//     { ingredient: 'Cumin', measure: '1 tsp ' },
//     { ingredient: 'Coriander', measure: '1 tsp ' },
//     { ingredient: 'Paprika', measure: '1 tsp ' }
// ]