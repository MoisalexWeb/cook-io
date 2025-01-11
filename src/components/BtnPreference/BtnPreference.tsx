import "./BtnPreference.scss"
import { Link } from "react-router-dom"

interface Props {
    text: string
    href: string
}

export const BtnPreference: React.FC<Props> = ({ text, href }) => {
    return (
        <li>
            <Link to={href} className="preference-btn">{text}</Link>
        </li>
    )
}
