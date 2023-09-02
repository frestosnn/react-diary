import React from 'react';
import SortPosts from '../sort-posts/SortPosts';
import './filter.css';

function Filter({ filter, setFilter }) {
  return (
    <section className="filter">
      <SortPosts
        options={[
          { value: 'title', name: 'По заголовку' },
          { value: 'text', name: 'По содержанию' },
          { value: 'createdAt', name: 'По дате' }
        ]}
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
      />

      <input
        className="filter__input"
        placeholder="Поиск постов"
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      ></input>
    </section>
  );
}

export default Filter;
