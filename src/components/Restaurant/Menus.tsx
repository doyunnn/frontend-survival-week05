import MenuItem from './MenuItem';

import useCart from '../../hooks/useCart';

import Menu from '../../types/Menu';

type MenuVuewType = 'menu' | 'cart' | 'receipt';

type MenusProps = {
  menus: Menu[];
  type: MenuVuewType;
};

export default function Menus({ menus, type }: MenusProps) {
  const { setCart } = useCart();

  const handleSelectMenu = (menu: Menu) => {
    if (type === 'cart') {
      setCart((prev) => prev.filter((m) => m.id !== menu.id));
      return;
    }
    setCart((prev) => [...prev, menu]);
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {menus.map((menu) => (
        <MenuItem key={menu.id} menu={menu}>
          {type !== 'receipt' && (
            <button
              name={`#${menu.name}`}
              type="button"
              style={{ marginLeft: '5px' }}
              onClick={() => handleSelectMenu(menu)}
            >
              {type === 'menu' ? '추가' : '취소'}
            </button>
          )}
        </MenuItem>
      ))}
    </ul>
  );
}
