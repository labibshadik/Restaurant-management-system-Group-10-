import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthProvider';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const { email } = useContext(AuthContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log(email); // Corrected from user.email to email
        const response = await axios.get(`http://localhost:6001/carts/${email}`);
        console.log(response, email);
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [email]); // Added email to the dependency array

  return (
    <div>
      <h1>All Orders</h1>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order">
            <h2>Order ID: {order._id}</h2>
            <p>Customer Name: {order.customerName}</p>
            <p>Email: {order.email}</p>
            <p>Product: {order.product}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Price: {order.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
