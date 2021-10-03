function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@edx/paragon';
import { SearchContext } from './SearchContext';
import { clearRefinementsAction } from './data/actions';
export var CLEAR_ALL_TEXT = 'clear all';

var ClearCurrentRefinements = function ClearCurrentRefinements(_ref) {
  var className = _ref.className,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["className", "variant"]);

  var _useContext = useContext(SearchContext),
      dispatch = _useContext.dispatch;
  /**
   * Called when clear filters button is clicked. Removes
   * all non-query keys from refinementsFromQueryParams and
   * updates the query params.
   */


  var handleClearAllRefinementsClick = function handleClearAllRefinementsClick() {
    dispatch(clearRefinementsAction());
  };

  return /*#__PURE__*/React.createElement(Button, _extends({
    className: className,
    variant: variant,
    onClick: handleClearAllRefinementsClick
  }, props), CLEAR_ALL_TEXT);
};

ClearCurrentRefinements.propTypes = {
  variant: PropTypes.string.isRequired,
  className: PropTypes.string
};
ClearCurrentRefinements.defaultProps = {
  className: undefined
};
export default ClearCurrentRefinements;
//# sourceMappingURL=ClearCurrentRefinements.js.map