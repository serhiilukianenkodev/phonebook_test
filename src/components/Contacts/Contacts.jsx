export const Contacts = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>name: {name}</p>
          <p>phone number: {number}</p>
          <button type="button" onClick={() => removeContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
