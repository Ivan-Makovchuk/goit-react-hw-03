import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((user) => (
        <li className={css.contactItem} key={user.id}>
          <Contact data={user} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
