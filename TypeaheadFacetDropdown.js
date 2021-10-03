function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { Input } from '@edx/paragon';
import FacetDropdown from './FacetDropdown';

var TypeaheadFacetDropdown = function TypeaheadFacetDropdown(_ref) {
  var title = _ref.title,
      items = _ref.items,
      isBold = _ref.isBold,
      options = _ref.options,
      searchForItems = _ref.searchForItems,
      props = _objectWithoutProperties(_ref, ["title", "items", "isBold", "options", "searchForItems"]);

  var handleSearch = debounce(function (value) {
    // when user is erasing the input and input is empty we need to reset the filtering
    if (value.length >= options.minLength || value.length === 0) {
      searchForItems(value);
    }
  }, 200);

  var transformMenuOptions = function transformMenuOptions(menuOptions) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "pr-2 pl-2 pb-2"
    }, /*#__PURE__*/React.createElement(Input, {
      autoFocus: true,
      type: "search",
      className: "typeahead-dropdown-input",
      onChange: function onChange(event) {
        return handleSearch(event.currentTarget.value);
      },
      placeholder: options.placeholder,
      "aria-label": options.ariaLabel
    })), /*#__PURE__*/React.createElement("div", {
      className: "typeahead-dropdown-menu-scrollable-items"
    }, menuOptions));
  };

  return /*#__PURE__*/React.createElement(FacetDropdown, _extends({
    items: transformMenuOptions(items),
    title: title,
    isBold: isBold,
    className: "typeahead"
  }, props));
};

TypeaheadFacetDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isBold: PropTypes.bool.isRequired,
  options: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    minLength: PropTypes.number.isRequired
  }).isRequired,
  searchForItems: PropTypes.func.isRequired
};
export default TypeaheadFacetDropdown;
//# sourceMappingURL=TypeaheadFacetDropdown.js.map