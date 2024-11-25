import { Link } from 'react-router-dom';
import { Logo, NavigationBar, NavigationLinks } from './header.styles';

const Header = () => (
	<NavigationBar>
		<Logo>Medlink Students</Logo>
		<NavigationLinks>
			<Link to='/'>Home</Link>
			<Link to='/courses'>Courses</Link>
			<Link to='/universities'>Universities</Link>
			<Link to='/contact'>Contact</Link>
		</NavigationLinks>
	</NavigationBar>
);

export default Header;
