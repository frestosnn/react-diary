import React from 'react';

function SortPosts({ options, value, onChange }) {
  return (
    <>
      <h3 className="sort__name">Сортировка:</h3>
      <select
        className="filter__select"
        value={value}
        onChange={event => onChange(event.target.value)}
      >
        <option className="sort__option" disabled>
          Сортировка по:
        </option>

        {options.map(option => (
          <option className="sort__option" value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default SortPosts;
