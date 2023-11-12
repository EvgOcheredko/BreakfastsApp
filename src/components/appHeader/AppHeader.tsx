import './appHeader.module.css'
import ProfileDropdown from '../profileDropdown/ProfileDropdown'

import classNames from './appHeader.module.css'

const AppHeader = () => {
	return (
		<header className={classNames.appHeader}>
			<h1 className={classNames.appTitle}>
				<a>Breakfast with Jenia</a>
			</h1>
			<nav className={classNames.appMenu}>
				<ul>
					<li>Recipes</li>
					<li>Life hacks</li>
					<li>About</li>
				</ul>
			</nav>
			<ProfileDropdown />
		</header>
	)
}

export default AppHeader
