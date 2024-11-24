import { consultButtonText, welcomeText } from '../../store/raw/text';
import { universities } from '../../store/raw/universities';
import { Section, Button } from './main-content.styles';

const MainContent = () => (
	<Section bg='/AlpineLakes.jpg'>
		<h1>{welcomeText}</h1>
		<ul>
			{universities.map((university) => (
				<li key={university.name}>{university.name}</li>
			))}
		</ul>
		<Button href='https://api.whatsapp.com/send?phone=15551234567'>
			{consultButtonText}
		</Button>
	</Section>
);

export default MainContent;
