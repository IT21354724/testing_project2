import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

class OrderService {
  constructor() {
    this.paymentService = new PaymentService(this);
  }

  placeOrder(orderId) {
    console.log(`Placing order ${orderId}`);
    this.paymentService.processPayment(orderId);
  }
}

class PaymentService {
  constructor(orderService) {
    this.orderService = orderService;
  }

  processPayment(orderId) {
    console.log(`Processing payment for order ${orderId}`);
    this.orderService.placeOrder(orderId); // Infinite recursion
  }
}

function App() {
  useEffect(() => {
    const orderService = new OrderService();
    try {
      orderService.placeOrder(101); // ⚠️ Will cause a stack overflow
    } catch (e) {
      console.error('⚠️ Stack overflow detected due to infinite loop:', e);
    }
  }, []);

  return (
    <div style={{ fontFamily: 'Arial', padding: '2em' }}>
      <h1>Order Service (With Deficient Encapsulation / Tight Coupling)</h1>
      <p>Open the browser console to observe the infinite recursion error.</p>
    </div>
  );
}
