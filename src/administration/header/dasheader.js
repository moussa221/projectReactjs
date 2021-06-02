import React from "react";

function Dasheader() {
  return (
    <div className="dashContainer">
      <nav className="main-header navbar navbar-expand navbar-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#">
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa fa-apple" aria-hidden="true" />
              </span>
              <span className="title">
                <h2>Brand Name</h2>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa fa-home" aria-hidden="true" />
              </span>
              <span className="title">
                <h2>Dashboard</h2>
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <i className="fa fa-question-circle" aria-hidden="true" />
              </span>
              <span className="title">
                <h2>Help</h2>
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <i className="fa fa-cog" aria-hidden="true" />
              </span>
              <span className="title">
                <h2>Settings</h2>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="dashMain">
        <div className="topbar">
          <div className="toggle" />
          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <i className="fa fa-search" aria-hidden="true" />
            </label>
          </div>
          <div className="user">
            <img src="./img/laptop.jpg" />
          </div>
        </div>
        <div className="cardBox">
          <div className="card">
            <div>
              <div className="numbers">1,042</div>
              <div className="cardName">Daily Views</div>
            </div>
            <div className="iconBox">
              <i className="fa fa-eye" aria-hidden="true" />
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">80</div>
              <div className="cardName">Sales Views</div>
            </div>
            <div className="iconBox">
              <i className="fa fa-shopping-cart" aria-hidden="true" />
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">208</div>
              <div className="cardName">Comments</div>
            </div>
            <div className="iconBox">
              <i className="fa fa-comment" aria-hidden="true" />
            </div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">$7,042</div>
              <div className="cardName">Earning</div>
            </div>
            <div className="iconBox">
              <i className="fa fa-usd" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="details">
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>Recent Orders</h2>
              <a href="#" className="btn">
                View All
              </a>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>
                    <span className="status delivered">Delivered</span>
                  </td>
                </tr>
                <tr>
                  <td>Window Coolers</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td>
                    <span className="status pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>Speakers</td>
                  <td>$620</td>
                  <td>Paid</td>
                  <td>
                    <span className="status return">Return</span>
                  </td>
                </tr>
                <tr>
                  <td>Dell Laptop</td>
                  <td>$7000</td>
                  <td>Due</td>
                  <td>
                    <span className="status inprogress">In Progress</span>
                  </td>
                </tr>
                <tr>
                  <td>Window Coolers</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td>
                    <span className="status pending">Pending</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="recentCustomers">
            <div className="cardHeader">
              <h2>Recent Customers</h2>
            </div>
            <table>
              <tbody>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="./img/airport.jpg" width="350px" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      David
                      <br />
                      <span>Sénégal</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="./img/laptop-1209008_1280.jpg" width="350px" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      David
                      <br />
                      <span>Sénégal</span>
                    </h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx">
                      <img src="./img/startup-594090_1920.jpg" width="350px" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      David
                      <br />
                      <span>Sénégal</span>
                    </h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dasheader;
