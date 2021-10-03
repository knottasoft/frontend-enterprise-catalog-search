import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connectPagination } from 'react-instantsearch-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Pagination } from '@edx/paragon';
import { SearchContext } from './SearchContext';
import { setRefinementAction, deleteRefinementAction } from './data/actions';
export var SearchPaginationBase = function SearchPaginationBase(_ref) {
  var nbPages = _ref.nbPages,
      currentRefinement = _ref.currentRefinement,
      maxPagesDisplayed = _ref.maxPagesDisplayed;

  var _useContext = useContext(SearchContext),
      dispatch = _useContext.dispatch;

  var icons = useMemo(function () {
    return {
      left: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faAngleLeft
      }), /*#__PURE__*/React.createElement("div", {
        className: "sr-only"
      }, "Перейти влево")),
      right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
        icon: faAngleRight
      }), /*#__PURE__*/React.createElement("div", {
        className: "sr-only"
      }, "Перейти вправо"))
    };
  }, []);
  var buttonLabels = {
    previous: '',
    next: '',
    page: 'Страница',
    currentPage: 'Текущая страница',
    pageOfCount: 'из'
  };

  var handlePageSelect = function handlePageSelect(page) {
    if (page > 1) {
      dispatch(setRefinementAction('page', page));
    } else {
      dispatch(deleteRefinementAction('page'));
    }
  };

  return /*#__PURE__*/React.createElement(Pagination, {
    paginationLabel: "навигация по результатам поиска",
    pageCount: nbPages,
    currentPage: currentRefinement,
    onPageSelect: handlePageSelect,
    maxPagesDisplayed: maxPagesDisplayed,
    buttonLabels: buttonLabels,
    icons: {
      leftIcon: icons.left,
      rightIcon: icons.right
    }
  });
};
SearchPaginationBase.propTypes = {
  nbPages: PropTypes.number.isRequired,
  currentRefinement: PropTypes.number,
  maxPagesDisplayed: PropTypes.number
};
SearchPaginationBase.defaultProps = {
  currentRefinement: 1,
  maxPagesDisplayed: 7
};
export default connectPagination(SearchPaginationBase);
//# sourceMappingURL=SearchPagination.js.map
