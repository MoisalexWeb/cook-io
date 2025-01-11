import "./Home.scss"
import { Hero } from "../../Hero/Hero.tsx"
import { TabSection } from "../../TabSection/TabSection.tsx"
import { LatestRecipes } from "../../LatestRecipes/LatestRecipes.tsx"
import { Preference } from "../../Preference/Preference.tsx"


export const Home = () => {
    return (
        <>
            <Hero />

            <TabSection />

            <LatestRecipes
                title="latest chinese recipes"
                area="Chinese"
            />

            <LatestRecipes 
                title="latest italian recipes"
                area="Italian"
            />

            <Preference />
        </>
    )
}

