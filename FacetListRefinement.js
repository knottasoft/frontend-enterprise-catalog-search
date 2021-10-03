function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { connectRefinementList } from 'react-instantsearch-dom';
import FacetListBase from './FacetListBase';
export var FacetListRefinementBase = function FacetListRefinementBase(_ref) {
  var currentRefinement = _ref.currentRefinement,
      props = _objectWithoutProperties(_ref, ["currentRefinement"]);

  return /*#__PURE__*/React.createElement(FacetListBase, _extends({
    isBold: currentRefinement.length > 0,
    isCheckedField: "isRefined"
  }, props));
};
FacetListRefinementBase.propTypes = {
  attribute: PropTypes.string.isRequired,
  currentRefinement: PropTypes.arrayOf(PropTypes.string).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  refinementsFromQueryParams: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired
};
export default connectRefinementList(FacetListRefinementBase);
//# sourceMappingURL=FacetListRefinement.js.map