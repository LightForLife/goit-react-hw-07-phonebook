import { ContactForm } from './FormContacts/Form';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './FilterSearch/FilterSearch';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container, MainTitle, SearchTitle } from './App.styled';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <SearchTitle>Contacts</SearchTitle>
        <Filter />
        <ListContacts />
      </Container>
    </>
  );
}
