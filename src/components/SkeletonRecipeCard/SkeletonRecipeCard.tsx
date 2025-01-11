import "./SkeletonRecipeCard.scss"

export const SkeletonRecipeCard = () => {
    return (
        <div className="skeletonRecipeCard">
            <div className="skeletonRecipeCard-image"></div>
            <div className="skeletonRecipeCard__texts">
                <span className="skeletonRecipeCard__texts-title"></span>
                <span className="skeletonRecipeCard__texts-btn"></span>
            </div>
        </div>
    )
}
