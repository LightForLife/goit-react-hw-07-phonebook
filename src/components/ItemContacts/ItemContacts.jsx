import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUserTimes } from 'react-icons/fa';
import { deleteContact } from 'redux/operations';
import {
  ItemContact,
  NameContact,
  DeleteContactBtn,
  TelContact,
} from './ItemContacts.styled';

export const ItemContacts = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ItemContact id={id}>
      <NameContact>
        {name}
        <DeleteContactBtn onClick={handleDelete}>
          <FaUserTimes size={18} />
        </DeleteContactBtn>
      </NameContact>
      <TelContact>{number}</TelContact>
    </ItemContact>
  );
};

// ItemContacts.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
// };
