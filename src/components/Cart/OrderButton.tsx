import useCart from '../../hooks/useCart';

export default function OrderButton() {
  const { cart, handleOrderInCart } = useCart();
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <button type="button" onClick={() => handleOrderInCart()}>
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
