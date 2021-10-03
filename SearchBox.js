import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SearchField } from '@edx/paragon';
import { connectSearchBox } from 'react-instantsearch-dom';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import { deleteRefinementAction, setRefinementAction } from './data/actions';
import { SearchContext } from './SearchContext';
import { STYLE_VARIANTS, QUERY_PARAM_FOR_PAGE, QUERY_PARAM_FOR_SEARCH_QUERY } from './data/constants';
export var searchText = 'Поиск курсов'; // this prefix will be combined with one of the SearchBox props to create a full tracking event name
// only if event name prop is provided by user. In the absence of the tracking name prop,
// no tracking event will be sent.

export var SEARCH_EVENT_NAME_PREFIX = 'edx.enterprise';
export var QUERY_SUBMITTED_EVENT = 'catalog_search.query_submitted';
export var SearchBoxBase = function SearchBoxBase(_ref) {
  var className = _ref.className,
      defaultRefinement = _ref.defaultRefinement,
      variant = _ref.variant;

  var _useContext = useContext(SearchContext),
      dispatch = _useContext.dispatch,
      trackingName = _useContext.trackingName;
  /**
   * Handles when a search is submitted by adding the user's search
   * query as a query parameter. Note that it must preserved any other
   * existing query parameters must be preserved.
   */


  var handleSubmit = function handleSubmit(searchQuery) {
    dispatch(setRefinementAction(QUERY_PARAM_FOR_SEARCH_QUERY, searchQuery));
    dispatch(deleteRefinementAction(QUERY_PARAM_FOR_PAGE));

    if (trackingName) {
      sendTrackEvent("".concat(SEARCH_EVENT_NAME_PREFIX, ".").concat(trackingName, ".").concat(QUERY_SUBMITTED_EVENT), {
        query: searchQuery
      });
    }
  };
  /**
   * Handles when a search is cleared by removing the user's search query
   * from the query parameters.
   */


  var handleClear = function handleClear() {
    dispatch(deleteRefinementAction(QUERY_PARAM_FOR_SEARCH_QUERY));
    dispatch(deleteRefinementAction(QUERY_PARAM_FOR_PAGE));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("label", {
    id: "search-input-box",
    className: "fe__searchfield-input-box text-brand-primary"
  }, searchText), /*#__PURE__*/React.createElement(SearchField.Advanced, {
    className: classNames('fe__searchfield', {
      'fe__searchfield--inverse': variant === STYLE_VARIANTS.inverse
    }),
    value: defaultRefinement,
    onSubmit: handleSubmit,
    onClear: handleClear
  }, /*#__PURE__*/React.createElement(SearchField.Input, {
    className: "form-control-lg",
    "aria-labelledby": "search-input-box",
    "data-hj-whitelist": true
  }), /*#__PURE__*/React.createElement(SearchField.ClearButton, null), /*#__PURE__*/React.createElement(SearchField.SubmitButton, null)));
};
SearchBoxBase.propTypes = {
  defaultRefinement: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf([STYLE_VARIANTS.default, STYLE_VARIANTS.inverse])
};
SearchBoxBase.defaultProps = {
  className: undefined,
  defaultRefinement: '',
  variant: STYLE_VARIANTS.inverse
};
export default connectSearchBox(SearchBoxBase);
//# sourceMappingURL=SearchBox.js.map
