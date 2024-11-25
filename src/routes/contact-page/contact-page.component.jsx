import { countries } from '../../store/raw/countries';
import { Form } from './contact-page.styles';

const ContactPage = () => {
  return (
      <Form>
        <h2>Contact Us</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />

        <label htmlFor="email">Email ID</label>
        <input type="email" id="email" placeholder="Enter your email ID" />

        <label htmlFor="mobile">Mobile Number</label>
        <input type="tel" id="mobile" placeholder="Enter your mobile number" />

        <label htmlFor="destination">Your preferred study destination</label>
        <select id="destination">
          <option value="" disabled selected>
            Select Destination
        </option>
        {
          countries.map((country) => (
            <option key={country.name} value={country.name}>{country.name}</option>
          ))
        }
        </select>

        <label htmlFor="course">Course</label>
        <input type="text" id="course" placeholder="Enter your course" />

        <button type="submit">Submit</button>
      </Form>
  );
};

export default ContactPage;
