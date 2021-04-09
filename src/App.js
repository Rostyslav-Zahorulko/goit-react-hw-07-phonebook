import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.scss';

const App = () => (
  <Container>
    <h1 className="app-title">Phonebook</h1>

    <ContactForm />

    <h2 className="section-title">Contacts</h2>

    <Filter />

    <ContactList />
  </Container>
);

export default App;
