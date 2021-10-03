import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { breakpoints, useWindowSize } from '@edx/paragon';
import FacetListRefinement from './FacetListRefinement';
import FacetListBase from './FacetListBase';
import CurrentRefinements from './CurrentRefinements';
import MobileFilterMenu from './MobileFilterMenu';
import { SHOW_ALL_NAME, STYLE_VARIANTS } from './data/constants';
import { sortItemsByLabelAsc } from './data/utils';
import { SearchContext } from './SearchContext';
import { features } from './config';
export var FREE_ALL_TITLE = 'Бесплатно / Все';

var SearchFilters = function SearchFilters(_ref) {
  var variant = _ref.variant;
  var size = useWindowSize();

  var _useContext = useContext(SearchContext),
      refinementsFromQueryParams = _useContext.refinementsFromQueryParams,
      searchFacetFilters = _useContext.searchFacetFilters;

  var showMobileMenu = useMemo(function () {
    return size.width < breakpoints.small.maxWidth;
  }, [JSON.stringify(size)]);
  var freeAllItems = useMemo(function () {
    return [{
      label: 'Бесплатно для меня',
      // flip the 1 to 0 or vice versa using boolean logic
      // eslint-disable-next-line no-bitwise
      value: refinementsFromQueryParams[SHOW_ALL_NAME] ^ 1
    }, {
      label: 'Все курсы',
      value: refinementsFromQueryParams[SHOW_ALL_NAME]
    }];
  }, [refinementsFromQueryParams[SHOW_ALL_NAME]]);
  var searchFacets = useMemo(function () {
    var filtersFromRefinements = searchFacetFilters.map(function (_ref2) {
      var title = _ref2.title,
          attribute = _ref2.attribute,
          isSortedAlphabetical = _ref2.isSortedAlphabetical,
          typeaheadOptions = _ref2.typeaheadOptions,
          noDisplay = _ref2.noDisplay;
      return /*#__PURE__*/React.createElement(FacetListRefinement, {
        key: attribute,
        title: title,
        attribute: attribute,
        limit: 300 // this is replicating the B2C search experience
        ,
        transformItems: function transformItems(items) {
          if (isSortedAlphabetical) {
            return sortItemsByLabelAsc(items);
          }

          return items;
        },
        refinementsFromQueryParams: refinementsFromQueryParams,
        defaultRefinement: refinementsFromQueryParams[attribute],
        facetValueType: "array",
        typeaheadOptions: typeaheadOptions,
        searchable: !!typeaheadOptions,
        variant: variant,
        noDisplay: noDisplay
      });
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, features.ENROLL_WITH_CODES && /*#__PURE__*/React.createElement(FacetListBase, {
      attribute: SHOW_ALL_NAME,
      facetValueType: "bool",
      isBold: true,
      items: freeAllItems,
      key: SHOW_ALL_NAME,
      title: FREE_ALL_TITLE,
      variant: variant
    }), filtersFromRefinements);
  }, [refinementsFromQueryParams]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, showMobileMenu ? /*#__PURE__*/React.createElement(MobileFilterMenu, {
    className: "mb-3"
  }, searchFacets) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "d-flex"
  }, searchFacets), /*#__PURE__*/React.createElement(CurrentRefinements, {
    variant: variant
  })));
};

SearchFilters.defaultProps = {
  variant: STYLE_VARIANTS.inverse
};
SearchFilters.propTypes = {
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse])
};
export default SearchFilters;
//# sourceMappingURL=SearchFilters.js.map
