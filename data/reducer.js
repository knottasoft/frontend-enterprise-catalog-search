function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable import/prefer-default-export */
import { DELETE_REFINEMENT, SET_REFINEMENT, CLEAR_REFINEMENTS, SET_REFINEMENTS_FROM_QUERY_PARAMS, ADD_TO_REFINEMENT_ARRAY, REMOVE_FROM_REFINEMENT_ARRAY } from './actions';
import { QUERY_PARAMS_TO_IGNORE } from './constants';
export var refinementsReducer = function refinementsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var nextState = _objectSpread({}, state);

  switch (action.type) {
    case DELETE_REFINEMENT:
      delete nextState.page;
      delete nextState[action.key];
      return nextState;

    case SET_REFINEMENT:
      delete nextState.page;
      nextState[action.key] = action.value;
      return nextState;

    case SET_REFINEMENTS_FROM_QUERY_PARAMS:
      // we don't delete the page when setting multiple refinements.
      // This action should only be used by SearchData,
      //  and it has to handle the page coming in as a query param.
      // Deleting it can cause an infinite loop.
      Object.keys(state).forEach(function (key) {
        // remove refinements that are not from query params
        if (!QUERY_PARAMS_TO_IGNORE.includes(key)) {
          delete nextState[key];
        }
      });
      return _objectSpread(_objectSpread({}, nextState), action.payload);

    case ADD_TO_REFINEMENT_ARRAY:
      {
        delete nextState.page;
        var currentValue = state[action.key] || [];
        return _objectSpread(_objectSpread({}, nextState), {}, _defineProperty({}, action.key, [].concat(_toConsumableArray(currentValue), [action.value])));
      }

    case REMOVE_FROM_REFINEMENT_ARRAY:
      {
        if (nextState[action.key]) {
          delete nextState.page;

          var _currentValue = state[action.key] || [];

          return _objectSpread(_objectSpread({}, nextState), {}, _defineProperty({}, action.key, _currentValue.filter(function (value) {
            return value !== action.value;
          })));
        }

        return nextState;
      }

    case CLEAR_REFINEMENTS:
      delete nextState.page;
      Object.keys(nextState).forEach(function (key) {
        if (!QUERY_PARAMS_TO_IGNORE.includes(key)) {
          delete nextState[key];
        }
      });
      return nextState;

    default:
      return nextState;
  }
};
//# sourceMappingURL=reducer.js.map