function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useMemo } from 'react';
import { isNull } from '@edx/frontend-enterprise-utils';
/**
   * Transforms items into an object with a key for each facet attribute
   * with a list of that facet attribute's active selection(s).
   */

export var useActiveRefinementsByAttribute = function useActiveRefinementsByAttribute(items) {
  var refinementsFromQueryParamsByAttribute = useMemo(function () {
    var refinements = {};
    items.forEach(function (facet) {
      var attribute = facet.attribute;
      refinements[attribute] = facet.items;
    });
    return refinements;
  }, [items]);
  return refinementsFromQueryParamsByAttribute;
};
/**
   * Transforms refinementsFromQueryParamsByAttribute into a flat array of objects,
   * each with an attribute key so we can still associate which attribute
   * a refinement is for.
   */

export var useActiveRefinementsAsFlatArray = function useActiveRefinementsAsFlatArray(items) {
  var refinementsFromQueryParamsByAttribute = useActiveRefinementsByAttribute(items);
  var refinementsFromQueryParamsAsFlatArray = useMemo(function () {
    var refinements = [];
    Object.entries(refinementsFromQueryParamsByAttribute).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      var updatedValue = value.map(function (item) {
        return _objectSpread(_objectSpread({}, item), {}, {
          attribute: key
        });
      });
      refinements.push.apply(refinements, _toConsumableArray(updatedValue));
    });
    return refinements;
  }, [refinementsFromQueryParamsByAttribute]);
  return refinementsFromQueryParamsAsFlatArray;
};
export var useNbHitsFromSearchResults = function useNbHitsFromSearchResults(searchResults) {
  var nbHits = useMemo(function () {
    if (searchResults && !isNull(searchResults.nbHits)) {
      return searchResults && searchResults.nbHits;
    }

    return null;
  }, [searchResults]);
  return nbHits;
};
export var getCatalogString = function getCatalogString(catalogs) {
  function catalogFilterReducer(result, catalog, index) {
    var isLastCatalog = index === catalogs.length - 1;
    var query = "".concat(result, "enterprise_catalog_uuids:").concat(catalog);

    if (!isLastCatalog) {
      query += ' ИЛИ ';
    }

    return query;
  }

  return catalogs.reduce(catalogFilterReducer, '');
};
//# sourceMappingURL=hooks.js.map
