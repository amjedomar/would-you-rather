import PropTypes from 'prop-types';
import Select from 'react-select';
import {connect} from 'react-redux';

const UserSelect = props => {
  const options = Object.values(props.users).map(user => ({
    value: user.id,
    // The code of img usage with react-select is taken from https://stackoverflow.com/a/56575446/8148505
    label: (
      <div className="select-option">
        <img
          className="select-option-icon"
          src={user.avatarURL}
          alt={`${user.name}'s Avatar`}
        />

        <span>{user.name}</span>
      </div>
    )
  }));

  const handleChange = option => {
    props.onChange(option ? option.value : null);
  };

  return (
    <Select
      placeholder="Select User"
      options={options}
      onChange={handleChange}
      isClearable
    />
  );
};

UserSelect.propTypes = {
  onChange: PropTypes.func.isRequired
};

const mapStateToProps = ({ users }) => ({
  users
});

export default connect(mapStateToProps)(UserSelect);
