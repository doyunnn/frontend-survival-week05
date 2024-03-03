import Menus from '../Restaurant/Menus';
import OrderButton from './OrderButton';

import useCart from '../../hooks/useCart';

export default function CartContainer() {
  const { cart } = useCart();
  return (
    <div style={{ maxWidth: '400px', marginBottom: '50px' }}>
      <h2>
        점심 바구니
      </h2>
      <Menus menus={cart} type="cart" />
      <OrderButton />
    </div>
  );
}
