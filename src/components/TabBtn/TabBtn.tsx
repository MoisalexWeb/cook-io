import "./TabBtn.scss"
import { Categories } from "../TabSection/hooks/useGetMeal"

interface Props {
    category: Categories
    textBtn: string
    state: string
    setState: () => void
}

export const TabBtn:React.FC<Props> = ({ category, textBtn, state, setState }) => {
    return (
        <button 
            className="tab-btn"
            data-category={category} 
            aria-selected={category === state ? true : false}
            onClick={setState}
        >
            {textBtn}
        </button>
    )
}