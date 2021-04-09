import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import contactsActions from '../../redux/contacts/contacts-actions';

import './Filter.scss';

const Filter = ({ filter, onChange }) => (
  <label className="filter">
    Find contacts by name
    <input
      className="filter-input"
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
    ></input>
  </label>
);

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(contactsActions.filterContactsByName(event.currentTarget.value)),
});

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
