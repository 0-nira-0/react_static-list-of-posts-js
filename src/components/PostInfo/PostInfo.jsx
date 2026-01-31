import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ postInfo }) => {
  const { user, post, comments } = postInfo;
  const mail = `mailto:${user.email}`;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <a className="UserInfo" href={mail}>
            {user.name}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      {comments.length !== 0 ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
