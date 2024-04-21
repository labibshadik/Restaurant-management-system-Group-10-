import axios from 'axios';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageItems = () => {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth();
  console.log(user?.email);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:6001/carts/username/${user.email}`);
        console.log(response);
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [user?.email]);

  // Function to handle sending confirmation email
  const handleSendEmail = async (email) => {
    try {
      // Generate cart information string
      const cartInfo = cartItems.map(item => `${item.quantity}x ${item.restaurant} - ${item.price}`).join('\n');

      // Construct email message with cart information
      const message = `Your order has been confirmed. Thank you for shopping with us!\n\nCart Information:\n${cartInfo}`;

      // Send email
      const response = await axios.post(`http://localhost:6001/send-email`, {
        recipientEmail: email,
        message: message
      });
      console.log(response.data);
      alert("Email sent successfully");
      // Optionally, you can show a success message or perform any other action after sending the email
    } catch (error) {
      console.error('Error sending email:', error);
      // Optionally, you can show an error message or perform any other action if sending the email fails
    }
  };

  // Render the cart items
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra md:w-[870px]">
          <thead className="bg-green text-white rounded-lg">
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id}>
                <td>{item.restaurant}</td>
                <td>
                  <img src={item.image} alt={item.restaurant} style={{ width: '100px', height: 'auto' }} />
                </td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => handleSendEmail(item.email)}>Confirm Order</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
