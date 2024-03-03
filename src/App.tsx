import CartContainer from './components/Cart/CartContainer';
import ReceiptContainer from './components/Receipt/ReceiptContainer';
import RestaurantContainer from './components/Restaurant/RestaurantContainer';
import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();
  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <CartContainer />
      <RestaurantContainer restaurants={restaurants} />
      <ReceiptContainer />
    </div>
  );
}
