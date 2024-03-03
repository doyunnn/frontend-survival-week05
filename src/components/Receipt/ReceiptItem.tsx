import Menus from '../Restaurant/Menus';

import Receipt from '../../types/Receipt';

type ReceiptItemProrps = {
  receipt: Receipt
}

export default function ReceiptItem({ receipt }: ReceiptItemProrps) {
  return (
    <div style={{
      width: '50%',
      border: '1px solid black',
      textAlign: 'center',
    }}
    >
      <h1>영수증</h1>
      <h2>주문번호</h2>
      <p>{receipt.id}</p>
      <h2>주문목록</h2>
      <Menus menus={receipt.menu} type="receipt" />
      <h4>
        총 가격:
        {' '}
        {receipt.totalPrice.toLocaleString()}
        원
      </h4>
    </div>
  );
}
