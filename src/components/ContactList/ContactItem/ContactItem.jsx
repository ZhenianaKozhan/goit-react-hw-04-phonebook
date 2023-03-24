import { Button } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';
import { Contact } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Contact id={id}>
      {name}: {number}{' '}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
