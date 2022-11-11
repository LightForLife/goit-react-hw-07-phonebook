import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { LoaderWrapper } from './Spinner.styled';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <LoaderWrapper>
      <RotatingLines
        strokeColor="#36d7b7"
        strokeWidth="4"
        animationDuration="0.75"
        width="58"
        visible={isLoading}
      />
    </LoaderWrapper>
  );
};
