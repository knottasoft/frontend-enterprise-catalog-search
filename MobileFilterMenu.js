function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { Button } from '@edx/paragon';
import ClearCurrentRefinements from './ClearCurrentRefinements';
import { useActiveRefinementsAsFlatArray } from './data/hooks';
export var MobileFilterMenuBase = function MobileFilterMenuBase(_ref) {
  var children = _ref.children,
      className = _ref.className,
      items = _ref.items;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var activeRefinementsAsFlatArray = useActiveRefinementsAsFlatArray(items);
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, !isOpen && /*#__PURE__*/React.createElement(Button, {
    className: "btn btn-block bg-white rounded-0 d-flex align-items-center justify-content-between text-dark",
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mr-2"
  }, "Filters", activeRefinementsAsFlatArray && activeRefinementsAsFlatArray.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "ml-1"
  }, "(", activeRefinementsAsFlatArray.length, " selected)")), /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faCaretDown
  })), /*#__PURE__*/React.createElement("div", {
    className: classNames('modal fade mobile-filter-menu', {
      'd-block show': isOpen
    }, {
      'd-none': !isOpen
    }),
    tabIndex: "-1",
    role: "dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog",
    role: "document"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title text-center w-100"
  }, "All Filters", activeRefinementsAsFlatArray && activeRefinementsAsFlatArray.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "ml-1"
  }, "(", activeRefinementsAsFlatArray.length, " selected)")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    className: "btn-close position-absolute px-2",
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faTimes,
    id: "icon-close-mobile-filter-menu"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "close filter menu"))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body p-0"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer py-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(ClearCurrentRefinements, {
    className: "btn-block",
    variant: "inverse-primary"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "btn-brand-primary btn-block py-2 m-0",
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, "Done")))))));
};
MobileFilterMenuBase.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  className: PropTypes.string
};
MobileFilterMenuBase.defaultProps = {
  className: undefined
};
export default connectCurrentRefinements(MobileFilterMenuBase);
//# sourceMappingURL=MobileFilterMenu.js.map