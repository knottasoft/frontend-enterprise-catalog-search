import React from 'react';
import { renderWithRouter } from '@edx/frontend-enterprise-utils';
import SearchData from '../SearchContext';
export var renderWithSearchContext = function renderWithSearchContext(children) {
  return renderWithRouter( /*#__PURE__*/React.createElement(SearchData, null, children));
};
export var renderWithSearchContextAndTracking = function renderWithSearchContextAndTracking(children, trackingName) {
  return renderWithRouter( /*#__PURE__*/React.createElement(SearchData, {
    trackingName: trackingName
  }, children));
};
//# sourceMappingURL=utils.js.map