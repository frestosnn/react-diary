import React from 'react';
import Card from '../card/Card.jsx';

function Posts({ posts, removePost }) {
  return (
    <section className="cards">
      {posts.length !== 0 ? (
        posts.map(item => <Card key={item.id} card={item} removePost={removePost} />)
      ) : (
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          К сожалению, добавленные записи отсутствуют
        </h2>
      )}
    </section>
  );
}

export default Posts;
