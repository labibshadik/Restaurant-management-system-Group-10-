import React, { useContext, useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import Bkash from "../../components/bkash";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0); // Initial discount is zero

  // Calculate the total price for each item in the cart
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // Calculate the cart subtotal
  const cartSubtotal = cart.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // Apply discount to the cart subtotal
  const discountedSubtotal = cartSubtotal - discount;

  // Apply Discount button handler
  const applyDiscount = () => {
    // Here you can implement coupon validation logic
    // For simplicity, let's assume the coupon code is valid and provides a fixed discount
    const fixedDiscountAmount = 7; // Example fixed discount amount
    setDiscount(fixedDiscountAmount);
  };

  // delete an item
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:6001/carts/${item._id}`)
          .then((response) => {
            if (response) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* banner */}
      <div className=" bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-28 flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Items Added to The<span className="text-aquagr"> Cart</span>
            </h2>
          </div>
        </div>
      </div>

      {/* cart table */}
      {cart.length > 0 ? (
        <div>
          <div className="">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="bg-aquagr text-white rounded-sm">
                  <tr>
                    <th>#</th>
                    <th>Food</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="font-medium">{item.name}</td>
                      <td>
                        <button
                          className="btn btn-xs"
                          onClick={() => handleDecrease(item)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={() => console.log(item.quantity)}
                          className="w-10 mx-2 text-center overflow-hidden appearance-none"
                        />
                        <button
                          className="btn btn-xs"
                          onClick={() => handleIncrease(item)}
                        >
                          +
                        </button>
                      </td>
                      <td>${calculateTotalPrice(item).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn btn-sm border-none text-red bg-transparent"
                          onClick={() => handleDelete(item)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row justify-between items-start my-12 gap-8">
            <div className="md:w-1/2 space-y-3">
              <h3 className="text-lg font-semibold">Customer Details</h3>
              <p>Name: {user?.displayName || "None"}</p>
              <p>Email: {user?.email}</p>
              <p>
                User_id: <span className="text-sm">{user?.uid}</span>
              </p>
            </div>
            <div className="md:w-1/2 space-y-3">
              <h3 className="text-lg font-semibold">Shopping Details</h3>
              <p>Total Items: {cart.length}</p>
              <p>
                Total Price:{" "}
                <span id="total-price">${discountedSubtotal.toFixed(2)}</span>
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="border border-gray-300 px-3 py-2 rounded-md mr-2"
                />
                <button
                  onClick={applyDiscount}
                  className="btn btn-md bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Apply Discount
                </button>
              </div>
              <button  className="btn btn-md bg-aquagr text-white px-8 py-1">
                Cash delvery
              </button>
              <Link to="/bkash">
        <button className="btn btn-md bg-aquagr text-white px-8 py-1">
          Proceed to Bkash
        </button>
      </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <p>Cart is empty. Please add products.</p>
          <Link to="/menu">
            <button className="btn bg-aquagr text-white mt-3">
              Back to Menu
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
