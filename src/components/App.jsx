import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContacts } from '../redux/selectors';

import { ContactForm } from './FormContacts/Form';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './FilterSearch/FilterSearch';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container, MainTitle, SearchTitle } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  // Получаем части состояния
  const { items, isLoading, error } = useSelector(getContacts);
  console.log(items);
  // Вызываем операцию
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {/* <Container> */}
      {/* <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <SearchTitle>Contacts</SearchTitle>
        <Filter /> */}
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      {/* <ListContacts /> */}
      {/* </Container> */}
    </>
  );
};
