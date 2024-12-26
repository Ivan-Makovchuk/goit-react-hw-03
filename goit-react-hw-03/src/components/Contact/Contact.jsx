import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "../Contact/Contact.module.css";

const Contact = ({ data: { name, number, id }, onDelete }) => {
  return (
    <>
      <div>
        <div className={css.contactItem}>
          <FaUser />
          <h3>{name}</h3>
        </div>
        <div className={css.contactItem}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className={css.contactItemBtn}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
