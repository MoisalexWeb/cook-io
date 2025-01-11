import "./SkeletonRecipeDetailCard.scss"

export const SkeletonRecipeDetailCard = () => {
    return (
        <div className="skeletonRecipeDetailCard">
            <div className="skeletonRecipeDetailCard-img"></div>

            <div className="skeletonRecipeDetailCard__title">
                <span className="skeletonRecipeDetailCard__title-text"></span>
                <span className="skeletonRecipeDetailCard__title-btn"></span>
            </div>

            <div className="skeletonRecipeDetailCard__ingr">
                <span className="skeletonRecipeDetailCard__ingr-text"></span>
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
            </div>

            <div className="skeletonRecipeDetailCard__ingr instruction">
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
                <span className="skeletonRecipeDetailCard__ingr-item"></span>
            </div>
        </div>
    )
}
