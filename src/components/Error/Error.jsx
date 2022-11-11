import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';
import { ErrorTitle } from './Error.styled';

export const Error = () => {
  const errorValue = useSelector(selectError);
  return <ErrorTitle>{errorValue} :(</ErrorTitle>;
};
