function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

export var sortItemsByLabelAsc = function sortItemsByLabelAsc(items) {
  return items.sort(function (a, b) {
    return a.label.localeCompare(b.label);
  });
};
export var updateRefinementsFromQueryParams = function updateRefinementsFromQueryParams(refinements) {
  var refinementsWithJoinedLists = {};
  Object.entries(refinements).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var newValue = value;

    if (Array.isArray(value)) {
      newValue = value.join(',');
    }

    refinementsWithJoinedLists[key] = newValue;
  });
  return refinementsWithJoinedLists;
};
export function stringifyRefinements(refinements) {
  var refinementString = new URLSearchParams(refinements).toString(); // URLSearchParams won't encode spaces contained within individual refinements- ie `Computer Science`

  if (refinementString) {
    refinementString = refinementString.replace(/[+]/g, '%20');
  }

  return refinementString;
}
export function paramsToObject(entries) {
  var result = {};
  entries.forEach(function (value, key) {
    result[key] = value;
  });
  return result;
}
export function hasFeatureFlagEnabled(featureFlag) {
  var searchParams = new URLSearchParams(window.location.search);

  var _paramsToObject = paramsToObject(searchParams),
      features = _paramsToObject.features;

  return features && features.split(',').includes(featureFlag);
}
//# sourceMappingURL=utils.js.map