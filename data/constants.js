import { features } from '../config';
export var SHOW_ALL_NAME = 'showAll';
export var SEARCH_FACET_FILTERS = [{
  attribute: 'skill_names',
  title: 'Навыки',
  typeaheadOptions: {
    placeholder: 'Найдите навык...',
    ariaLabel: 'Введите, чтобы найти навык',
    minLength: 3
  }
}, {
  attribute: 'subjects',
  title: 'Тема',
  typeaheadOptions: {
    placeholder: 'Найдите тему...',
    ariaLabel: 'Введите для поиска темы',
    minLength: 3
  }
}, {
  attribute: 'partners.name',
  title: 'Партнер',
  isSortedAlphabetical: true,
  typeaheadOptions: {
    placeholder: 'Найдите партнера...',
    ariaLabel: 'Введите для поиска партнера',
    minLength: 3
  }
}, {
  attribute: features.PROGRAM_TITLES_FACET ? 'program_titles' : 'programs',
  title: 'Программа',
  isSortedAlphabetical: true,
  typeaheadOptions: {
    placeholder: 'Найдите программу...',
    ariaLabel: 'Введите для поиска программы',
    minLength: 3
  }
}, {
  attribute: 'level_type',
  title: 'Level'
}, {
  attribute: 'availability',
  title: 'Доступность'
}];

if (features.LANGUAGE_FACET) {
  SEARCH_FACET_FILTERS.push({
    attribute: 'language',
    title: 'Язык',
    isSortedAlphabetical: true
  });
}

export var BOOLEAN_FILTERS = [SHOW_ALL_NAME];
export var QUERY_PARAM_FOR_SEARCH_QUERY = 'q';
export var QUERY_PARAM_FOR_PAGE = 'page';
export var QUERY_PARAM_FOR_FEATURE_FLAGS = 'features';
export var QUERY_PARAMS_TO_IGNORE = [QUERY_PARAM_FOR_SEARCH_QUERY, QUERY_PARAM_FOR_PAGE, QUERY_PARAM_FOR_FEATURE_FLAGS, SHOW_ALL_NAME];
export var NUM_CURRENT_REFINEMENTS_TO_DISPLAY = 3;
export var NUM_RESULTS_PER_PAGE = 24;
export var NO_OPTIONS_FOUND = 'Варианты не найдены.';
export var STYLE_VARIANTS = {
  default: 'default',
  inverse: 'inverse'
};
//# sourceMappingURL=constants.js.map
