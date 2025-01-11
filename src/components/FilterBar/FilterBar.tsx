import "./FilterBar.scss"
import { useFilterContext } from "../../context/useFilterContext.ts"
import { useHandleForm } from "./hooks/useHandleForm.ts"
import { useId } from "react"

export const FilterBar = () => {
    const formId = useId()
    const { ToggleAccordion, closeFilter, isOpen } = useFilterContext()
    const { handleSubmit, formReset } = useHandleForm()

    return (
        <>
            <aside className={`filter ${isOpen ? 'open' : ''}`}>
                <form 
                    id={formId}
                    onSubmit={(event) => handleSubmit(event)}
                >
                    <div className="filter__header">
                        <i className='bx bx-filter'></i>

                        <span>Filters</span>

                        <button
                            type="button"
                            className="filter__header-close"
                            onClick={closeFilter}
                        >
                            <i className='bx bx-x'></i>
                        </button>
                    </div>

                    <div className="filter__search">
                        <input type="text" className="filter__search-input" name="search" placeholder="Search recipes..." />
                        <label className="filter__search-label">Search</label>
                    </div>

                    <div className="filter__accordion">
                        <button
                            type="button"
                            className="filter__accordion__btn"
                            aria-expanded="false"
                            onClick={(event) => ToggleAccordion(event)}
                        >
                            <i className='bx bx-world' ></i>
                            <span>Area</span>
                            <i className='bx bx-chevron-down'></i>
                        </button>

                        <div className="filter__accordion__container">
                            <div className="filter__accordion__content">
                                <label htmlFor="American" className="filter__accordion__content-item">
                                    <input type="radio" id="American" name="area" value="American" />
                                    American
                                </label>

                                <label htmlFor="British" className="filter__accordion__content-item">
                                    <input type="radio" id="British" name="area" value="British" />
                                    British
                                </label>

                                <label htmlFor="Canadian" className="filter__accordion__content-item">
                                    <input type="radio" id="Canadian" name="area" value="Canadian" />
                                    Canadian
                                </label>

                                <label htmlFor="Chinese" className="filter__accordion__content-item">
                                    <input type="radio" id="Chinese" name="area" value="Chinese" />
                                    Chinese
                                </label>

                                <label htmlFor="Dutch" className="filter__accordion__content-item">
                                    <input type="radio" id="Dutch" name="area" value="Dutch" />
                                    Dutch
                                </label>

                                <label htmlFor="Egyptian" className="filter__accordion__content-item">
                                    <input type="radio" id="Egyptian" name="area" value="Egyptian" />
                                    Egyptian
                                </label>

                                <label htmlFor="French" className="filter__accordion__content-item">
                                    <input type="radio" id="French" name="area" value="French" />
                                    French
                                </label>

                                <label htmlFor="Greek" className="filter__accordion__content-item">
                                    <input type="radio" id="Greek" name="area" value="Greek" />
                                    Greek
                                </label>

                                <label htmlFor="Indian" className="filter__accordion__content-item">
                                    <input type="radio" id="Indian" name="area" value="Indian" />
                                    Indian
                                </label>

                                <label htmlFor="Irish" className="filter__accordion__content-item">
                                    <input type="radio" id="Irish" name="area" value="Irish" />
                                    Irish
                                </label>

                                <label htmlFor="Italian" className="filter__accordion__content-item">
                                    <input type="radio" id="Italian" name="area" value="Italian" />
                                    Italian
                                </label>

                                <label htmlFor="Jamaican" className="filter__accordion__content-item">
                                    <input type="radio" id="Jamaican" name="area" value="Jamaican" />
                                    Jamaican
                                </label>

                                <label htmlFor="Japanese" className="filter__accordion__content-item">
                                    <input type="radio" id="Japanese" name="area" value="Japanese" />
                                    Japanese
                                </label>

                                <label htmlFor="Kenyan" className="filter__accordion__content-item">
                                    <input type="radio" id="Kenyan" name="area" value="Kenyan" />
                                    Kenyan
                                </label>

                                <label htmlFor="Malaysian" className="filter__accordion__content-item">
                                    <input type="radio" id="Malaysian" name="area" value="Malaysian" />
                                    Malaysian
                                </label>

                                <label htmlFor="Mexican" className="filter__accordion__content-item">
                                    <input type="radio" id="Mexican" name="area" value="Mexican" />
                                    Mexican
                                </label>

                                <label htmlFor="Moroccan" className="filter__accordion__content-item">
                                    <input type="radio" id="Moroccan" name="area" value="Moroccan" />
                                    Moroccan
                                </label>

                                <label htmlFor="Russian" className="filter__accordion__content-item">
                                    <input type="radio" id="Russian" name="area" value="Russian" />
                                    Russian
                                </label>

                                <label htmlFor="Spanish" className="filter__accordion__content-item">
                                    <input type="radio" id="Spanish" name="area" value="Spanish" />
                                    Spanish
                                </label>

                                <label htmlFor="Thai" className="filter__accordion__content-item">
                                    <input type="radio" id="Thai" name="area" value="Thai" />
                                    Thai
                                </label>

                                <label htmlFor="Tunisian" className="filter__accordion__content-item">
                                    <input type="radio" id="Tunisian" name="area" value="Tunisian" />
                                    Tunisian
                                </label>

                                <label htmlFor="Turkish" className="filter__accordion__content-item">
                                    <input type="radio" id="Turkish" name="area" value="Turkish" />
                                    Turkish
                                </label>

                                <label htmlFor="Vietnamese" className="filter__accordion__content-item">
                                    <input type="radio" id="Vietnamese" name="area" value="Vietnamese" />
                                    Vietnamese
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="filter__accordion">
                        <button
                            type="button"
                            className="filter__accordion__btn"
                            aria-expanded="false"
                            onClick={(event) => ToggleAccordion(event)}
                        >
                            <i className='bx bx-category' ></i>
                            <span>Category</span>
                            <i className='bx bx-chevron-down'></i>
                        </button>

                        <div className="filter__accordion__container">
                            <div className="filter__accordion__content">
                                <label htmlFor="Beef" className="filter__accordion__content-item">
                                    <input type="radio" id="Beef" name="category" value="Beef" />
                                    Beef
                                </label>

                                <label htmlFor="Breakfast" className="filter__accordion__content-item">
                                    <input type="radio" id="Breakfast" name="category" value="Breakfast" />
                                    Breakfast
                                </label>

                                <label htmlFor="Chicken" className="filter__accordion__content-item">
                                    <input type="radio" id="Chicken" name="category" value="Chicken" />
                                    Chicken
                                </label>

                                <label htmlFor="Dessert" className="filter__accordion__content-item">
                                    <input type="radio" id="Dessert" name="category" value="Dessert" />
                                    Dessert
                                </label>

                                <label htmlFor="Goat" className="filter__accordion__content-item">
                                    <input type="radio" id="Goat" name="category" value="Goat" />
                                    Goat
                                </label>

                                <label htmlFor="Lamb" className="filter__accordion__content-item">
                                    <input type="radio" id="Lamb" name="category" value="Lamb" />
                                    Lamb
                                </label>

                                <label htmlFor="Miscellaneous" className="filter__accordion__content-item">
                                    <input type="radio" id="Miscellaneous" name="category" value="Miscellaneous" />
                                    Miscellaneous
                                </label>

                                <label htmlFor="Pasta" className="filter__accordion__content-item">
                                    <input type="radio" id="Pasta" name="category" value="Pasta" />
                                    Pasta
                                </label>

                                <label htmlFor="Pork" className="filter__accordion__content-item">
                                    <input type="radio" id="Pork" name="category" value="Pork" />
                                    Pork
                                </label>

                                <label htmlFor="Seafood" className="filter__accordion__content-item">
                                    <input type="radio" id="Seafood" name="category" value="Seafood" />
                                    Seafood
                                </label>

                                <label htmlFor="Side" className="filter__accordion__content-item">
                                    <input type="radio" id="Side" name="category" value="Side" />
                                    Side
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="filter__buttons">
                        <button type="button" onClick={() => formReset(formId)} className="filter__buttons-btn clear">Clear</button>
                        <button type="submit" className="filter__buttons-btn apply">Apply</button>
                    </div>
                </form>
            </aside>

            
            <div
                className={`background ${isOpen ? 'show' : ''}`}
                onClick={closeFilter}
            >
            </div>
        </>

    )
}
