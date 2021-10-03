import { hasFeatureFlagEnabled } from '../data/utils';
export var FEATURE_ENROLL_WITH_CODES = 'ENROLL_WITH_CODES';
export var FEATURE_LANGUAGE_FACET = 'LANGUAGE_FACET';
export var FEATURE_PROGRAM_TITLES_FACET = 'PROGRAM_TITLES_FACET'; // eslint-disable-next-line import/prefer-default-export

export var features = {
  ENROLL_WITH_CODES: process.env.FEATURE_ENROLL_WITH_CODES || hasFeatureFlagEnabled(FEATURE_ENROLL_WITH_CODES),
  LANGUAGE_FACET: process.env.FEATURE_LANGUAGE_FACET || hasFeatureFlagEnabled(FEATURE_LANGUAGE_FACET),
  PROGRAM_TITLES_FACET: process.env.FEATURE_PROGRAM_TITLES_FACET || hasFeatureFlagEnabled(FEATURE_PROGRAM_TITLES_FACET)
};
//# sourceMappingURL=index.js.map