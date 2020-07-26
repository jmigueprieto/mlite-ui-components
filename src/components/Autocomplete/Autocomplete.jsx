import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

//TODO
// 1. Consume a GraphQL API to get the list of items
// 2. Handle up and down keys
// 3. Snapshot tests
const findSuggestions = (items, value) => {
  return items.filter(
    (it) => !value || it.toLowerCase().startsWith(value.toLowerCase())
  );
};

const Autocomplete = ({ items, placeholder }) => {
  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const onKeyDown = (e) => {
    if (e.keyCode === 27) {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
  };

  const suggestions = findSuggestions(items, value);

  return (
    <div className={styles.container}>
      <input
        name="autocomplete-input"
        placeholder={placeholder}
        type="text"
        className={styles.text}
        onFocus={(e) => setShowSuggestions(true)}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={(e) => {
          setTimeout(() => setShowSuggestions(false), 200);
        }}
        value={value}
      ></input>
      {showSuggestions && (
        <ul className={styles.suggestions}>
          {suggestions.map((item, index) => (
            <li
              className={styles["suggestion-item"]}
              key={index}
              onClick={() => {
                setValue(item);
                setShowSuggestions(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Autocomplete.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string
};

Autocomplete.defaultProps = {
  items: [],
  placeholder: "Search"
};

export default Autocomplete;
