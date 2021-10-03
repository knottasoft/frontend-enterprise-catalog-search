export var DELETE_REFINEMENT = 'DELETE_REFINEMENT';
export var SET_REFINEMENT = 'SET_REFINEMENT';
export var CLEAR_REFINEMENTS = 'CLEAR_REFINEMENTS';
export var SET_REFINEMENTS_FROM_QUERY_PARAMS = 'SET_REFINEMENTS_FROM_QUERY_PARAMS';
export var ADD_TO_REFINEMENT_ARRAY = 'ADD_TO_REFINEMENT_ARRAY';
export var REMOVE_FROM_REFINEMENT_ARRAY = 'REMOVE_FROM_REFINEMENT_ARRAY';
export var deleteRefinementAction = function deleteRefinementAction(key) {
  return {
    type: DELETE_REFINEMENT,
    key: key
  };
};
export var setRefinementAction = function setRefinementAction(key, value) {
  return {
    type: SET_REFINEMENT,
    key: key,
    value: value
  };
};
export var setMultipleRefinementsAction = function setMultipleRefinementsAction() {
  var newKeyValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: SET_REFINEMENTS_FROM_QUERY_PARAMS,
    payload: newKeyValues
  };
};
export var clearRefinementsAction = function clearRefinementsAction() {
  return {
    type: CLEAR_REFINEMENTS
  };
};
export var addToRefinementArray = function addToRefinementArray(key, value) {
  return {
    type: ADD_TO_REFINEMENT_ARRAY,
    key: key,
    value: value
  };
};
export var removeFromRefinementArray = function removeFromRefinementArray(key, value) {
  return {
    type: REMOVE_FROM_REFINEMENT_ARRAY,
    key: key,
    value: value
  };
};
//# sourceMappingURL=actions.js.map