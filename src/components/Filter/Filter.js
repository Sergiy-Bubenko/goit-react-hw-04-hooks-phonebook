const Filter = ({ handleChange }) => (
  <label>
    Find contact by name
    <br />
    <input type="text" name="filter" onChange={handleChange} />
  </label>
);

export default Filter;
