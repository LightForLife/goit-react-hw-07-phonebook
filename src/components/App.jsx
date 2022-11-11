import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';

import { ContactForm } from './FormContacts/Form';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './FilterSearch/FilterSearch';
import { GlobalStyle } from 'styles/GlobalStyles';
import { Container, MainTitle, SearchTitle } from './App.styled';
import { Loader } from './Loader/Loader';
import { Error } from './Error/Error';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <SearchTitle>Contacts</SearchTitle>
        <Filter />

        {isLoading && !error && <Loader />}
        {error && <Error />}
        {!isLoading && <ListContacts />}
      </Container>
    </>
  );
};
