import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
// import { addContact } from 'redux/contactsSlice';
import { FormError, schema } from 'components/Validation/Validation';
import {
  FormBox,
  AddContactBtn,
  FormInput,
  FormContainer,
  FormLabel,
} from './Form.styled';

export const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (value, actions) => {
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );

    if (findName) {
      alert(`${value.name} is already in contacts`);
      return;
    }
    // dispatch(addContact(value.name, value.number));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormBox autoComplete="off">
        <FormContainer>
          <FormLabel htmlFor={nameInputId}>
            Name
            <FormInput type="text" name="name" id={nameInputId} />
            <FormError name="name" />
          </FormLabel>

          <FormLabel htmlFor={numberInputId}>
            Number
            <FormInput type="tel" name="number" id={numberInputId} />
            <FormError name="number" />
          </FormLabel>
        </FormContainer>
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </FormBox>
    </Formik>
  );
};
