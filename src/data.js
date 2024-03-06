import {getRandomInt, getRandomArrayElement} from './util.js';
import {PICTURE_DESCRIPTIONS, COMMENT_MESSAGES, USER_NAMES} from './const.js';

const MAX_COMMENT_COUNT = 10;
const MAX_PICTURE_COUNT = 25;
const MAX_AVATAR_COUNT = 6;
const MAX_LIKES_COUNT = 200;

const generateUser = () => ({
    name: getRandomArrayElement(USER_NAMES),
    avatar: `./img/avatars/${getRandomInt(1, MAX_AVATAR_COUNT)}.jpg`,
});

const usedPictureIds = [];
const usedCommentIds = [];

const generateComment = (maxPictureId) => {
    let commentId;
    do {
        commentId = getRandomInt(1, maxPictureId * MAX_COMMENT_COUNT);
    } while (usedCommentIds.includes(commentId));
    usedCommentIds.push(commentId);

    const commentData = {
        id: commentId,
        message: getRandomArrayElement(COMMENT_MESSAGES),
        user: generateUser(),
    };

    return commentData;
};

const generatePicture = (maxPictureId) => {
    let pictureId;
    do {
        pictureId = getRandomInt(1, maxPictureId);
    } while (usedPictureIds.includes(pictureId));
    usedPictureIds.push(pictureId);

    const comments = []
    for (let i = 0; i < getRandomInt(0, MAX_COMMENT_COUNT); i++) {
        comments.push(generateComment(maxPictureId));
    }

    const pictureData = {
        id: pictureId,
        url: `./photos/${getRandomInt(1, MAX_PICTURE_COUNT)}.jpg`,
        description: getRandomArrayElement(PICTURE_DESCRIPTIONS),
        likes: getRandomInt(0, MAX_LIKES_COUNT),
        comments
    };

    return pictureData;
};

// const generatePictures = (count) => {
//     const pictures = [];

//     for (let i = 0; i < count; i++) {
//         pictures.push(generatePicture(count));
//     }

//     return pictures;
// }

// const generatePictures = (count) => new Array(10).fill(null).map(() => generatePicture(count));

const generatePictures = (count) => Array.from({length: count}, () => generatePicture(count));

export {
    generatePictures,
};
