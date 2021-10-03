function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { createContext, useReducer, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { useIsFirstRender } from '@edx/frontend-enterprise-utils';
import { BOOLEAN_FILTERS, SEARCH_FACET_FILTERS } from './data/constants';
import { refinementsReducer } from './data/reducer';
import { setMultipleRefinementsAction } from './data/actions';
import { paramsToObject, stringifyRefinements, updateRefinementsFromQueryParams } from './data/utils';
export var SearchContext = /*#__PURE__*/createContext();
export var getRefinementsToSet = function getRefinementsToSet(queryParams, activeFacetAttributes) {
  var refinementsToSet = {};
  Object.entries(queryParams).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (activeFacetAttributes.includes(key)) {
      var valueAsArray = value.includes(',') ? value.split(',') : [value];
      refinementsToSet[key] = valueAsArray;
    } else if (BOOLEAN_FILTERS.includes(key)) {
      // convert a string into a number (this should be a 1 or 0)
      refinementsToSet[key] = +value;
    } else {
      refinementsToSet[key] = value;
    }
  });
  return refinementsToSet;
};

var SearchData = function SearchData(_ref3) {
  var children = _ref3.children,
      searchFacetFilters = _ref3.searchFacetFilters,
      trackingName = _ref3.trackingName;

  var _useReducer = useReducer(refinementsReducer, {}),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      refinementsFromQueryParams = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useLocation = useLocation(),
      search = _useLocation.search;

  var history = useHistory();
  var queryParams = useMemo(function () {
    return paramsToObject(new URLSearchParams(search));
  }, [search]);
  useEffect(function () {
    var activeFacetAttributes = searchFacetFilters.map(function (filter) {
      return filter.attribute;
    });
    var refinementsToSet = getRefinementsToSet(queryParams, activeFacetAttributes);
    dispatch(setMultipleRefinementsAction(refinementsToSet));
  }, [search]);
  var newQueryString = useMemo(function () {
    var refinementsWithJoinedLists = updateRefinementsFromQueryParams(refinementsFromQueryParams);
    return stringifyRefinements(refinementsWithJoinedLists);
  }, [refinementsFromQueryParams]);
  var isFirstRender = useIsFirstRender();
  useEffect(function () {
    if (!isFirstRender) {
      history.push({
        search: newQueryString
      });
    }
  }, [newQueryString]);
  var value = useMemo(function () {
    return {
      refinementsFromQueryParams: refinementsFromQueryParams,
      dispatch: dispatch,
      searchFacetFilters: searchFacetFilters,
      trackingName: trackingName
    };
  }, [refinementsFromQueryParams, dispatch, searchFacetFilters, trackingName]);
  return /*#__PURE__*/React.createElement(SearchContext.Provider, {
    value: value
  }, children);
};

SearchData.defaultProps = {
  searchFacetFilters: SEARCH_FACET_FILTERS,
  trackingName: null
};
SearchData.propTypes = {
  children: PropTypes.node.isRequired,
  searchFacetFilters: PropTypes.arrayOf(PropTypes.shape({
    attribute: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isSortedAlphabetical: PropTypes.bool
  })),
  trackingName: PropTypes.string
};
export default SearchData;
//# sourceMappingURL=SearchContext.js.map