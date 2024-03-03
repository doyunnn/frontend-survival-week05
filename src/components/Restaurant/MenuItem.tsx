import { HTMLAttributes } from 'react';

import Menu from '../../types/Menu';

interface MenuItemProps extends HTMLAttributes<Element> {
  menu: Menu;
}

export default function MenuItem({ menu, children }: MenuItemProps) {
  const { name, price } = menu;
  return (
    <li key={menu.id} style={{ display: 'flex', paddingBlock: '10px' }}>
      <span style={{ margin: '0 auto' }}>
        {name}
        (
        {price.toLocaleString()}
        원)
      </span>
      {children}
    </li>
  );
}
