import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';

const Page = () => (
	<>
		<Header />
		<Outlet />
		<Footer />
	</>
);

export default Page;
