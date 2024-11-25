import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import { PageContainer } from './page.styles';

const Page = () => (
	<>
		<Header />
		<Outlet />
		<Footer />
	</>
);

export default Page;
