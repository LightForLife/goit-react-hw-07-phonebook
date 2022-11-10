import { useSelector } from 'react-redux';
import { ItemContacts } from 'components/ItemContacts/ItemContacts';
import { selectVisibleContacts } from '../../redux/selectors';

export const ListContacts = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <ItemContacts key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
