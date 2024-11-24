import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import ContactPage from './routes/contact-page/contact-page.component';
import Page from './routes/page/page.component';

const App = () => (
	<Router>
		<Routes>
			<Route path='/' element={<Page />}>
				<Route index element={<Home />} />
				<Route path='contact/' element={<ContactPage />} />
			</Route>
		</Routes>
	</Router>
);

export default App;
