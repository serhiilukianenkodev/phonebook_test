export const Filter = ({ value, onFilterChange }) => {
  return (
    <>
      <h2>do you want find anybody?</h2>
      <input type="text" value={value} onChange={onFilterChange} />
    </>
  );
};
