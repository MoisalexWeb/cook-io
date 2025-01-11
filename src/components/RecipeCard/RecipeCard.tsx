import "./RecipeCard.scss"
import { useSaveRecipe } from "../../hooks/useSaveRecipe.ts"
import { Link } from "react-router-dom"

interface Props {
    id: string,
    name: string,
    image: string
}

export const RecipeCard: React.FC<Props> = ({ id, name, image }) => {
    const { isSaved, saveRecipe } = useSaveRecipe(id)


    return (
        <div className="recipeCard">
            <figure className="recipeCard__figure">
                <img src={image} alt={name} className="recipeCard__figure-img" loading="lazy" />
            </figure>

            <div className="recipeCard__texts">
                <Link to={`/detail/${id}`} className="recipeCard__texts-recipe">{name}</Link>

                <button
                    className="recipeCard__texts-btn"
                    onClick={() => saveRecipe()}
                >
                    {
                        isSaved
                            ? <i className='bx bxs-bookmark-star'></i>
                            : <i className="bx bx-bookmark"></i>
                    }
                </button>
            </div>
        </div>
    )
}
