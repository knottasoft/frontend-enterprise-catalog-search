import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Input, Dropdown } from '@edx/paragon';
import classNames from 'classnames';
import { STYLE_VARIANTS } from './data/constants';

var FacetItem = function FacetItem(_ref) {
  var handleInputOnChange = _ref.handleInputOnChange,
      item = _ref.item,
      isChecked = _ref.isChecked,
      variant = _ref.variant;
  return /*#__PURE__*/React.createElement(Dropdown.Item, {
    as: "label",
    className: "mb-0 py-3"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "checkbox",
    checked: isChecked,
    onChange: function onChange() {
      return handleInputOnChange(item);
    },
    className: "facet-item position-relative mr-2 mb-2"
  }), /*#__PURE__*/React.createElement("span", {
    className: classNames('facet-item-label', {
      'is-refined': isChecked
    })
  }, item.label), item.count && /*#__PURE__*/React.createElement(Badge, {
    pill: true,
    className: classNames('ml-2 bg-brand-primary text-brand-primary', {
      'bg-brand-primary--default': variant === STYLE_VARIANTS.default
    })
  }, item.count));
};

FacetItem.defaultProps = {
  variant: STYLE_VARIANTS.inverse
};
FacetItem.propTypes = {
  handleInputOnChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    count: PropTypes.number,
    label: PropTypes.string.isRequired
  }).isRequired,
  variant: PropTypes.oneOf(Object.values(STYLE_VARIANTS))
};
export default FacetItem;
//# sourceMappingURL=FacetItem.js.map