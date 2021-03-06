import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { NO_OPTIONS_FOUND, STYLE_VARIANTS } from './data/constants';
import FacetDropdown from './FacetDropdown';
import TypeaheadFacetDropdown from './TypeaheadFacetDropdown';
import FacetItem from './FacetItem';
import { SearchContext } from './SearchContext';
import { addToRefinementArray, setRefinementAction, deleteRefinementAction, removeFromRefinementArray } from './data/actions';

var FacetListBase = function FacetListBase(_ref) {
  var attribute = _ref.attribute,
      facetValueType = _ref.facetValueType,
      isBold = _ref.isBold,
      isCheckedField = _ref.isCheckedField,
      items = _ref.items,
      title = _ref.title,
      typeaheadOptions = _ref.typeaheadOptions,
      searchForItems = _ref.searchForItems,
      variant = _ref.variant,
      noDisplay = _ref.noDisplay;

  /**
   * Handles when a facet option is toggled by either updating the appropriate
   * query parameter for the facet attribute, or removes the facet attribute if
   * there's no longer any selected options for that facet attribute.
   */
  var _useContext = useContext(SearchContext),
      refinementsFromQueryParams = _useContext.refinementsFromQueryParams,
      dispatch = _useContext.dispatch;

  var handleInputOnChange = function handleInputOnChange(item) {
    if (item.value && facetValueType === 'array') {
      if (item.value.length > 0) {
        var _refinementsFromQuery;

        if ((_refinementsFromQuery = refinementsFromQueryParams[attribute]) !== null && _refinementsFromQuery !== void 0 && _refinementsFromQuery.includes(item.label)) {
          dispatch(removeFromRefinementArray(attribute, item.label));
        } else {
          dispatch(addToRefinementArray(attribute, item.label));
        }
      } else {
        dispatch(deleteRefinementAction(attribute));
      }
    } else if (facetValueType === 'bool') {
      // eslint-disable-next-line no-bitwise
      dispatch(setRefinementAction(attribute, refinementsFromQueryParams[attribute] ^ 1));
    }
  };

  var renderItems = useCallback(function () {
    if (!(items !== null && items !== void 0 && items.length)) {
      return /*#__PURE__*/React.createElement("span", {
        className: "p-2 d-block"
      }, NO_OPTIONS_FOUND);
    }

    return items.map(function (item) {
      var isChecked = isCheckedField ? item[isCheckedField] : !!item.value;
      return /*#__PURE__*/React.createElement(FacetItem, {
        key: item.label,
        handleInputOnChange: handleInputOnChange,
        item: item,
        isChecked: isChecked,
        variant: variant
      });
    });
  }, [items]);

  if (noDisplay) {
    return null;
  }

  if (typeaheadOptions) {
    return /*#__PURE__*/React.createElement(TypeaheadFacetDropdown, {
      items: renderItems(),
      title: title,
      isBold: isBold,
      options: typeaheadOptions,
      searchForItems: searchForItems,
      variant: variant
    });
  }

  return /*#__PURE__*/React.createElement(FacetDropdown, {
    items: renderItems(),
    title: title,
    isBold: isBold,
    variant: variant
  });
};

FacetListBase.defaultProps = {
  isCheckedField: null,
  typeaheadOptions: null,
  searchForItems: null,
  variant: STYLE_VARIANTS.inverse,
  noDisplay: false
};
FacetListBase.propTypes = {
  attribute: PropTypes.string.isRequired,
  facetValueType: PropTypes.oneOf(['array', 'bool']).isRequired,
  isBold: PropTypes.bool.isRequired,
  isCheckedField: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired,
  typeaheadOptions: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    minLength: PropTypes.number.isRequired
  }),
  searchForItems: PropTypes.func,
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse]),
  noDisplay: PropTypes.bool
};
export default FacetListBase;
//# sourceMappingURL=FacetListBase.js.map