import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MobileNavbar } from './components/MobileNavbar/MobileNavbar.tsx'
import { Home } from './components/pages/Home/Home.tsx'
import { Recipes } from './components/pages/Recipes/Recipes.tsx'
import { SavedRecipes } from './components/pages/SavedRecipes/SavedRecipes.tsx'
import { DesktopNavbar } from './components/DesktopNavbar/DesktopNavbar.tsx'
import { Detail } from './components/pages/Detail/Detail.tsx'
import { Footer } from './components/Footer/Footer.tsx'
import { FilterProvider } from './context/filterContext.tsx'
import { NotFound } from './components/pages/NotFound/NotFound.tsx'

function App() {
	return (
		<BrowserRouter>

			<DesktopNavbar />
			<MobileNavbar />

			<main>

				<FilterProvider>
					<Routes>
						<Route index path='/' element={<Home />} />

						<Route path='recipes' element={<Recipes />}>
							<Route path='area/:areaName' element={<Recipes />} />
							<Route path={`category/:categoryName`} element={<Recipes />} />
						</Route>

						<Route path='saved' element={<SavedRecipes />} />
						<Route path='detail/:recipeId' element={<Detail />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</FilterProvider>
				
			</main>

			<Footer />

		</BrowserRouter>
	)
}

export default App
