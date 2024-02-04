const generateUser = () => ({
    name: getRandomArrayElement(USER_NAMES),
    avatar: `./avatars/${getRandomInt(1, MAX_AVATAR_COUNT)}.jpg`,
});

const generateComment = () => ({
    id: getRandomInt(1, MAX_COMMENT_COUNT),
    message: getRandomArrayElement(COMMENT_MESSAGES),
    user: generateUser(),
});

const generatePicture = () => ({
    id: getRandomInt(1, MAX_PICTURE_COUNT),
    url: `./photos/${getRandomInt(1, MAX_PICTURE_COUNT)}.jpg`,
    description: getRandomArrayElement(PICTURE_DESCRIPTIONS),
    likes: getRandomInt(0, MAX_LIKES_COUNT),
    comments: [
        generateComment(),
        generateComment(),
        generateComment()
    ],
});

const generatePictures = (count) => {
    const pictures = [];

    for (let i = 0; i < count; i++) {
        pictures.push(generatePicture());
    }

    return pictures;
}
