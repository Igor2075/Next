import React from "react";
import axios from "axios";

export default function Posts({ id, comments }) {
  return (
    <div>
      <h1>Comments for Post ${id}</h1>
      {comments.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  );
}

const Comment = ({ email, body }) => (
  <div>
    <h5>{email}</h5>
    <p>{body}</p>
  </div>
);

Posts.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );

  const { data } = res;
  return { ...query, comments: data };
};
