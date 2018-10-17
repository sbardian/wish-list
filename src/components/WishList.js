import React from 'react';
import { css } from 'react-emotion';

export default ({ items }) => {
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: 1fr;
      `}
    >
      {items.map(item => {
        return <li key={item.node.id}>{item.node.title}</li>;
      })}
    </div>
  );
};
