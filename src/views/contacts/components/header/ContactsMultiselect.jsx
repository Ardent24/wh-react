import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Multiselect } from "multiselect-react-dropdown";
import { ContactsContext } from "../../ContactsContext";
import { isSelectedList } from "../../../../store/reducers/contactsReducer";

const ContactsMultiselect = ({ data, title }) => {
  const { stateResetFilters, setStateResetFilters } = React.useContext(
    ContactsContext
  );

  const selectRef = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (stateResetFilters) {
      selectRef.current.resetSelectedValues();
      setStateResetFilters(false);
    }
  }, [setStateResetFilters, stateResetFilters]);

  const onSelect = (selectedList) => {
    dispatch(isSelectedList({ selectedList, title }));
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
        id={`id-${title}`}
      />
    </div>
  );
};

ContactsMultiselect.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContactsMultiselect;
