import { consultButtonText, welcomeText } from '../../store/raw/text';
import { universities } from '../../store/raw/universities';
import { Section, Button } from './home.styles';

const Home = () => (
	<Section backgroundImage='/AlpineLakes.jpg'>
		<h1>{welcomeText}</h1>
		<ul>
			{universities.map((university) => (
				<li key={university.name}>{university.name}</li>
			))}
		</ul>
		<Button href='https://wa.me/917983853822'>{consultButtonText}</Button>
	</Section>
);

export default Home;
