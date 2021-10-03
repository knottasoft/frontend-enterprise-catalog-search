function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Badge, Button } from '@edx/paragon';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ClearCurrentRefinements from './ClearCurrentRefinements';
import { QUERY_PARAMS_TO_IGNORE, NUM_CURRENT_REFINEMENTS_TO_DISPLAY, STYLE_VARIANTS } from './data/constants';
import { useActiveRefinementsAsFlatArray } from './data/hooks';
import { SearchContext } from './SearchContext';
import { removeFromRefinementArray, deleteRefinementAction } from './data/actions';
export var CurrentRefinementsBase = function CurrentRefinementsBase(_ref) {
  var items = _ref.items,
      variant = _ref.variant;

  if (!items || !items.length) {
    return null;
  }

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showAllRefinements = _useState2[0],
      setShowAllRefinements = _useState2[1];

  var _useContext = useContext(SearchContext),
      refinementsFromQueryParams = _useContext.refinementsFromQueryParams,
      dispatch = _useContext.dispatch;

  var activeRefinementsAsFlatArray = useActiveRefinementsAsFlatArray(items);
  /**
   * Determines the correct number of active refinements to show at any
   * given time based on showAllRefinements.
   */

  var visibleActiveRefinements = useMemo(function () {
    if (showAllRefinements) {
      return activeRefinementsAsFlatArray;
    }

    return activeRefinementsAsFlatArray.slice(0, NUM_CURRENT_REFINEMENTS_TO_DISPLAY);
  }, [activeRefinementsAsFlatArray, showAllRefinements]);
  /**
   * Removes the refinement that was clicked from the query params, which causes
   * the search results to update.
   */

  var handleRefinementBadgeClick = function handleRefinementBadgeClick(item) {
    if (showAllRefinements && visibleActiveRefinements.length - 1 <= NUM_CURRENT_REFINEMENTS_TO_DISPLAY) {
      setShowAllRefinements(false);
    } // if the refinement is found, remove it.


    var facetName = item.attribute;

    if (!QUERY_PARAMS_TO_IGNORE.includes(facetName) && refinementsFromQueryParams[facetName] && refinementsFromQueryParams[facetName].includes(item.label)) {
      if (refinementsFromQueryParams[facetName].length === 1) {
        dispatch(deleteRefinementAction(facetName));
      } else {
        dispatch(removeFromRefinementArray(facetName, item.label));
      }
    }
  };

  return /*#__PURE__*/React.createElement("ul", {
    className: "list-unstyled d-flex flex-wrap align-items-center mb-0"
  }, visibleActiveRefinements.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      className: "mr-2",
      key: item.label
    }, /*#__PURE__*/React.createElement(Badge, {
      className: "fe__refinement-badge py-2 mb-2 font-weight-light",
      variant: "light",
      onClick: function onClick() {
        return handleRefinementBadgeClick(item);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "mr-2"
    }, item.label), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
      icon: faTimes
    }), /*#__PURE__*/React.createElement("span", {
      className: "sr-only"
    }, "Remove the filter ", item.label)));
  }), !showAllRefinements && activeRefinementsAsFlatArray.length > NUM_CURRENT_REFINEMENTS_TO_DISPLAY && /*#__PURE__*/React.createElement("li", {
    className: "mr-2"
  }, /*#__PURE__*/React.createElement(Badge, {
    className: classNames('fe__refinement-badge mb-2 py-2 font-weight-light', {
      'fe__refinement-badge--default': variant === STYLE_VARIANTS.defualt
    }),
    variant: "light",
    onClick: function onClick() {
      return setShowAllRefinements(true);
    }
  }, "+", activeRefinementsAsFlatArray.length - NUM_CURRENT_REFINEMENTS_TO_DISPLAY, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Show all ", activeRefinementsAsFlatArray.length, " filters"))), showAllRefinements && /*#__PURE__*/React.createElement("li", {
    className: "mr-2"
  }, /*#__PURE__*/React.createElement(Button, {
    className: classNames('fe__current-refinement-button text-underline px-1 py-0 mb-2', {
      'fe__current-refinement-button--inverse': variant === STYLE_VARIANTS.inverse
    }),
    onClick: function onClick() {
      return setShowAllRefinements(false);
    },
    variant: "link",
    size: "inline"
  }, "show less")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ClearCurrentRefinements, {
    className: classNames('fe__current-refinement-button text-underline px-1 py-0 mb-2', {
      'fe__current-refinement-button--inverse': variant === STYLE_VARIANTS.inverse
    }),
    variant: "link",
    size: "inline"
  })));
};
CurrentRefinementsBase.defaultProps = {
  variant: STYLE_VARIANTS.inverse
};
CurrentRefinementsBase.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  variant: PropTypes.oneOf(Object.values(STYLE_VARIANTS))
};
export default connectCurrentRefinements(CurrentRefinementsBase);
//# sourceMappingURL=CurrentRefinements.js.map