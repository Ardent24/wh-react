import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Multiselect } from "multiselect-react-dropdown";
import { ContactsContext } from "../../ContactsContext";
import {
  isSelectedList,
  filteredUsersBySelect,
} from "../../../../store/reducers/contactsReducer";

const ContactsMultiselect = ({ data, title }) => {
  const selectRef = React.useRef();
  const dispatch = useDispatch();
  const { stateResetFilters, setStateResetFilters } = React.useContext(
    ContactsContext
  );

  React.useEffect(() => {
    if (stateResetFilters) {
      selectRef.current.resetSelectedValues();
      setStateResetFilters(false);
    }
  }, [stateResetFilters]);

  const onSelect = (selectedList) => {
    dispatch(isSelectedList({ selectedList, title }));
    dispatch(filteredUsersBySelect());
  };
  const onRemove = (selectedList) => {
    dispatch(isSelectedList({ selectedList, title }));
  };

  return (
    <div className="contacts-header__select">
      <Multiselect
        ref={selectRef}
        options={data}
        placeholder={title}
        displayValue="name"
        showArrow={true}
        onSelect={onSelect}
        onRemove={onRemove}
      />
    </div>
  );
};

ContactsMultiselect.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContactsMultiselect;
