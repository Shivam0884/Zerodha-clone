import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios, { all } from "axios";
import Date from "./Date";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      // console.log(res.data);
      setAllOrders(res.data);
    });
  }, []); //The empty dependency array [] means this effect runs only once, after the initial render;

  return (
    <>
      <div className="orders">
        <h3 className="title">Orders ({allOrders.length})</h3>

        <div className="order-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>mode</th>
              <th>Date</th>
            </tr>
            {allOrders.map((stock, index) => {
              const Name = stock.name;
              const qty = stock.qty;
              const price = stock.price;
              const mode = stock.mode;

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td>{stock.mode}</td>
                  <td>
                    <Date />
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
