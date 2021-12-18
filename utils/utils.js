const getCommentById = (film, commentId) => film.comments.find((comment) => comment.id === commentId);

const deleteCommentById = (film, commentId) => {
  film.comments.forEach((comment, i) => {
    if (comment.id === commentId) {
      film.comments.splice(i, 1);
    }
  });
};

const addComment = (comment, film) => {
  film.comments.push(comment);
};

module.exports = { getCommentById, deleteCommentById, addComment };
