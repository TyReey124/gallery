const commentListElement = document.querySelector('.social__comments');
const commentTemplateElement = document.querySelector('#comment')
    .content
    .querySelector('.social__comment')

const renderCommentList = (comments) => {
    commentListElement.innerHTML = '';
    comments.forEach(({message, user}) => {
        const commentElement = commentTemplateElement.cloneNode(true);
        commentElement.querySelector('.social__picture').src = user.avatar;
        commentElement.querySelector('.social__text').textContent = message;
        commentListElement.append(commentElement);
    });
};

export {renderCommentList};
