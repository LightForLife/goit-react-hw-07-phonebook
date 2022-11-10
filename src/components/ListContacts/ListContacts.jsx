import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { nanoid } from 'nanoid';
import { ItemContacts } from 'components/ItemContacts/ItemContacts';

export const ListContacts = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const filter = useSelector(selectFilter);

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
