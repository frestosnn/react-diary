import React from 'react';
import Card from '../card/Card.jsx';
import { useSelector } from 'react-redux';

function Posts({ removePost, onButtonClick }) {
  const posts = useSelector(state => state.posts.posts);

  return (
    <section className="cards">
      {posts.length !== 0 ? (
        posts.map(item => (
          <Card key={item.id} card={item} removePost={removePost} onButtonClick={onButtonClick} />
        ))
      ) : (
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          К сожалению, добавленные записи отсутствуют
        </h2>
      )}
    </section>
  );
}

export default Posts;
