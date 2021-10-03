import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Dropdown } from '@edx/paragon';
import { STYLE_VARIANTS } from './data/constants';

var FacetDropdown = function FacetDropdown(_ref) {
  var title = _ref.title,
      items = _ref.items,
      isBold = _ref.isBold,
      className = _ref.className,
      variant = _ref.variant;
  return /*#__PURE__*/React.createElement("div", {
    className: "facet-list"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: classNames('mb-0 mr-md-3', className)
  }, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    variant: classNames({
      'inverse-primary': variant === STYLE_VARIANTS.inverse,
      'outline-primary': variant === STYLE_VARIANTS.default
    }),
    className: classNames({
      'font-weight-bold': isBold
    })
  }, title), /*#__PURE__*/React.createElement(Dropdown.Menu, null, items)));
};

FacetDropdown.defaultProps = {
  className: '',
  variant: STYLE_VARIANTS.inverse
};
FacetDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isBold: PropTypes.bool.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse])
};
export default FacetDropdown;
//# sourceMappingURL=FacetDropdown.js.map