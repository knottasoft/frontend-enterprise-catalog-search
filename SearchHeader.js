import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from '@edx/paragon';
import classNames from 'classnames';
import SearchBox from './SearchBox';
import SearchFilters from './SearchFilters';
import { STYLE_VARIANTS } from './data/constants';
import { SearchContext } from './SearchContext';
export var searchBoxColTestId = 'search-box-col';
export var filtersColTestId = 'filters-col';

var SearchHeader = function SearchHeader(_ref) {
  var variant = _ref.variant,
      containerSize = _ref.containerSize;

  var _useContext = useContext(SearchContext),
      refinementsFromQueryParams = _useContext.refinementsFromQueryParams;

  var searchQueryFromQueryParams = refinementsFromQueryParams.q;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-brand-primary"
  }, /*#__PURE__*/React.createElement(Container, {
    size: containerSize
  }, /*#__PURE__*/React.createElement(Row, {
    className: "pt-4 pb-3"
  }, /*#__PURE__*/React.createElement(Col, {
    "data-testid": searchBoxColTestId,
    className: classNames('fe__searchbox-col', {
      'fe__searchbox-col--default': variant === STYLE_VARIANTS.default
    }),
    xs: 12,
    md: 8
  }, /*#__PURE__*/React.createElement(SearchBox, {
    className: "mb-4",
    defaultRefinement: searchQueryFromQueryParams,
    variant: variant
  })), /*#__PURE__*/React.createElement(Col, {
    "data-testid": filtersColTestId,
    className: classNames('fe__searchbox-col', {
      'fe__searchbox-col--default': variant === STYLE_VARIANTS.default
    }),
    xs: 12
  }, /*#__PURE__*/React.createElement(SearchFilters, {
    className: "mb-3",
    variant: variant
  })))));
};

SearchHeader.defaultProps = {
  variant: STYLE_VARIANTS.inverse,
  containerSize: null
};
SearchHeader.propTypes = {
  containerSize: PropTypes.string,
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse])
};
export default SearchHeader;
//# sourceMappingURL=SearchHeader.js.map