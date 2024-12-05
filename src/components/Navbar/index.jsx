import { Link } from 'react-router'
import LogoBrand from '../LogoBrand'
import './nav.css'

const index = () => {
	return (
		<nav>
			<LogoBrand />
			<ul className='nav__menu'>
				<li>
					<Link to="/">
						Home
					</Link>
				</li>
				<li>
					<Link to="/agregar-video">
						Nuevo video
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default index
