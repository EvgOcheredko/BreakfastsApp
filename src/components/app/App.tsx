import classNames from './app.module.css'

import AppHeader from '../appHeader/AppHeader'
import { MainPage } from '../pages/MainPage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className={classNames.App}>
				<AppHeader />
				<main>
					<MainPage />
				</main>
			</div>
		</Router>
	)
}

export default App
