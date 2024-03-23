const PICTURE_DESCRIPTIONS = [
    'Well Done!',
    'Nice Photo',
    'Great Deal',
    'Wow!',
    'It so Bad!'
];

const COMMENT_MESSAGES = [
    'COOL',
    'LOL',
    'HAHAHHA',
    'LMAO',
    'NOT HE-HE',
    'HE-HE'
];

const USER_NAMES = [
    'Leo',
    'Da Vinchi',
    'Van Gog',
    'Maryanne',
    'Andrew',
    'Max (Todd)',
    'Clown',
    'Sony Boy',
    'Apple\'s maniac'
];

const MODAL_TRANSITION = 1000;

const EFFECTS = [
    {
        id: 1,
        name: 'none',
        css_filter: null,
        range_min: null,
        range_max: null,
        step: null,
        start: null,
        unit: null
    },
    {
        id: 2,
        name: 'chrome',
        css_filter: 'grayscale',
        range_min: 0,
        range_max: 1,
        step: 0.1,
        start: 1,
        unit: null
    },
    {
        id: 3,
        name: 'sepia',
        css_filter: 'sepia',
        range_min: 0,
        range_max: 1,
        step: 0.1,
        start: 1,
        unit: null
    },
    {
        id: 4,
        name: 'marvin',
        ess_filter: 'invert',
        range_min: 0,
        range_max: 100,
        step: 1,
        start: 100,
        unit: '%'
    },
    {
        id: 5,
        name: 'phobos',
        css_filter: 'blur',
        range_min: 0,
        range_max: 3,
        step: 0.1,
        start: 3,
        unit: 'px'
    },
    {
        id: 6,
        name: 'heat',
        css_filter: 'brightness',
        range_min: 1,
        range_max: 3,
        step: 0.1,
        start: 3,
        unit: null
    }
];

export {
    PICTURE_DESCRIPTIONS,
    COMMENT_MESSAGES,
    USER_NAMES,
    MODAL_TRANSITION,
    EFFECTS
};
