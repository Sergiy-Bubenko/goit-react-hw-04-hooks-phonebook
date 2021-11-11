import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, filter, onDeleteBtn }) {
  return (
    <ul className={s.ContactList}>
      {contacts
        .filter(cont => cont.name.toLowerCase().includes(filter.toLowerCase()))
        .map(c => (
          <li key={c.id} id={c.id}>
            {c.name}: {c.number}
            <button className={s.ContactListBtn} onClick={onDeleteBtn}>
              delete
            </button>
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};
