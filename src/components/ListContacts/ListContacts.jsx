import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { ItemContacts } from 'components/ItemContacts/ItemContacts';

export const ListContacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = () => {
    const constNormalizedFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(constNormalizedFilter)
    );

    return filterContacts;
  };

  const getVisibleContacts = visibleContacts();

  return (
    <ul>
      {getVisibleContacts.map(({ id, name, number }) => (
        <ItemContacts key={nanoid()} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
