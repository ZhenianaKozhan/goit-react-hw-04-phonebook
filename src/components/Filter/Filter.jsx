import PropTypes from 'prop-types';
import { FilterForm, Input } from './Filter.styled';

const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <FilterForm>
      <label htmlFor="filter">Find contacts by name</label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      />
    </FilterForm>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
