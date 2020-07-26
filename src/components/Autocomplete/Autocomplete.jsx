import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Autocomplete = ({ items, placeholder }) => {
  const [value, setValue] = useState();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const onKeyDown = (e) => {
    if (e.keyCode === 27) {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(true);
    }
    //TODO handle arrow keys
  };

  return (
    <div className={styles.container}>
      <input
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
          {items
            .filter(
              (it) => !value || it.toLowerCase().startsWith(value.toLowerCase())
            )
            .map((item, index) => (
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
