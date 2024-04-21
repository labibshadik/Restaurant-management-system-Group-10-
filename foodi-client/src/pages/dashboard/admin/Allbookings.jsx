import axios from 'axios';
import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const Allbookings = () => {
  const [cartItems, setCartItems] = useState([]);
  const [editableItem, setEditableItem] = useState(null); // State to store the ID of the item being edited
  const { user } = useAuth();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:6001/menu/username/${user.email}`);
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, [user?.email]);

  // Function to handle deletion of a menu item
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:6001/menu/${id}`);
      setCartItems(cartItems.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  // Function to handle editing of a menu item
  const handleEdit = (id) => {
    setEditableItem(id);
  };

  const handleUpdate = async (id, updatedItemValue) => {
    try {
      const response = await axios.patch(`http://localhost:6001/menu/${id}`, updatedItemValue);
      const updatedCartItems = cartItems.map(item => {
        if (item._id === id) {
          return { ...item, ...response.data }; // Merge the updated data into the existing item
        }
        return item;
      });
      setCartItems(updatedCartItems);
    //   setEditableItem(null); // Reset editableItem state
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };
  
  
  // Render the cart items
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra md:w-[870px]">
          <thead className="bg-green text-white rounded-lg">
            <tr>
              <th>restaurant</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
     
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id}>
                <td>
                  {editableItem === item._id ? (
                    <input
                      type="text"
                      value={item.restaurant}
                      onChange={(e) => {
                        const updatedItem = { ...item, restaurant: e.target.value };
                        handleUpdate(item._id, updatedItem);
                      }}
                    />
                  ) : (
                    item.restaurant
                  )}
                </td>
                <td>
                  <img src={item.image} alt={item.restaurant} style={{ width: '100px', height: 'auto' }} />
                </td>
                <td>
                  {editableItem === item._id ? (
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) => {
                        const updatedItem = { ...item, price: e.target.value };
                        handleUpdate(item._id, updatedItem);
                      }}
                    />
                  ) : (
                    item.price
                  )}
                </td>
                <td>
                  {editableItem === item._id ? (
                    <>
                      <button className="btn btn-success" onClick={() => handleUpdate(item._id, item)}>Save</button>
                      <button className="btn btn-secondary" onClick={() => setEditableItem(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-primary" onClick={() => handleEdit(item._id)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allbookings;