import { useLocalStorage } from 'usehooks-ts';

import Menu from '../types/Menu';

import useReceipt from './useReceipt';

import apiPostCreateOrder from '../api/apiPostCreateOrder';

const CART_STORAGE_KEY = 'cart-key';

export default function useCart() {
  const [cart, setCart] = useLocalStorage<Menu[]>(CART_STORAGE_KEY, []);

  const { receipt, setReceipt } = useReceipt();

  const handleOrderInCart = async () => {
    if (cart.length === 0) {
      alert('주문할 메뉴가 없습니다.');
      return;
    }

    const receiptRes = await apiPostCreateOrder(cart);

    if (receiptRes) {
      setReceipt(receiptRes);

      setTimeout(() => {
        setCart([]);
        setReceipt({ id: '', menu: [], totalPrice: 0 });
      }, 5000);
    }
  };

  return { cart, setCart, handleOrderInCart };
}
