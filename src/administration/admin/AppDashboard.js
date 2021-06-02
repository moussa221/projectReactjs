import React from "react";

export const AppDashboard = (props) => {
  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark"></h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  {/* <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li> */}
                  <h2>Bienvenu(e) Monsieur {props.userData.nom}</h2>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i class="fas">&#xf5da;</i>
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Admin</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-danger elevation-1">
                    <i className="fas fa-thumbs-up" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Likes</span>
                    <span className="info-box-number">2375</span>
                  </div>
                </div>
              </div>

              <div className="clearfix hidden-md-up" />
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-success elevation-1">
                    <i class="far">&#xf0f3;</i>
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Notifications</span>
                    <span className="info-box-number">
                      <b style={{ color: "red" }}>57</b>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box mb-3">
                  <span className="info-box-icon bg-warning elevation-1">
                    <i className="fas fa-users" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">New Members</span>
                    <span className="info-box-number">112</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">
                      Nombre d'élèves et de professeurs
                    </h5>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-tool dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i className="fas fa-wrench" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <p className="text-center">
                          <strong>Chiffres:</strong>
                        </p>
                        <div className="progress-group">
                          PROFESSEURS
                          <span className="float-right">
                            <b>160</b>
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                        <div className="progress-group">
                          APPRENANTS
                          <span className="float-right">
                            <b>1150</b>
                          </span>
                          <div className="progress progress-sm">
                            <div
                              className="progress-bar bg-success"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Latest Members</h3>
                    <div className="card-tools">
                      <span className="badge badge-danger">8 New Members</span>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <ul className="users-list clearfix">
                      <li>
                        <img src="https://cdn.pixabay.com/photo/2017/03/31/17/45/avatar-2191935_960_720.png" />
                        <a className="users-list-name" href="#">
                          Student1
                        </a>
                        <span className="users-list-date">Today</span>
                      </li>
                      <li>
                        <img
                          src="https://cdn.pixabay.com/photo/2017/03/31/17/44/avatar-2191933_960_720.png"
                          alt="User Image"
                        />
                        <a className="users-list-name" href="#">
                          Student2
                        </a>
                        <span className="users-list-date">Yesterday</span>
                      </li>
                      <li>
                        <img
                          src="https://cdn.pixabay.com/photo/2017/03/31/17/44/avatar-2191934_960_720.png"
                          alt="User Image"
                        />
                        <a className="users-list-name" href="#">
                          Student3
                        </a>
                        <span className="users-list-date">12 Jan</span>
                      </li>
                      <li>
                        <img
                          src="https://cdn.pixabay.com/photo/2017/03/31/17/44/avatar-2191934_960_720.png"
                          alt="User Image"
                        />
                        <a className="users-list-name" href="#">
                          Student4
                        </a>
                        <span className="users-list-date">12 Jan</span>
                      </li>
                      <li>
                        <img
                          src="https://cdn.pixabay.com/photo/2017/03/31/17/44/avatar-2191933_960_720.png"
                          alt="User Image"
                        />
                        <a className="users-list-name" href="#">
                          Student5
                        </a>
                        <span className="users-list-date">13 Jan</span>
                      </li>
                      <li>
                        <img
                          src="https://cdn.pixabay.com/photo/2017/03/31/17/44/avatar-2191934_960_720.png"
                          alt="User Image"
                        />
                        <a className="users-list-name" href="#">
                          Student6
                        </a>
                        <span className="users-list-date">14 Jan</span>
                      </li>
                      <li>
                        <img
                          src="https://cdn.pixabay.com/photo/2017/03/31/17/44/avatar-2191934_960_720.png"
                          alt="User Image"
                        />
                        <a className="users-list-name" href="#">
                          Student7
                        </a>
                        <span className="users-list-date">15 Jan</span>
                      </li>
                      <li>
                        <img
                          src="https://cdn.pixabay.com/photo/2017/03/31/17/45/avatar-2191935_960_720.png"
                          alt="User Image"
                        />
                        <a className="users-list-name" href="#">
                          Student8
                        </a>
                        <span className="users-list-date">15 Jan</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer text-center">
                    <a href="#">View All Users</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <aside className="control-sidebar control-sidebar-dark"></aside>
    </div>
  );
};

export default AppDashboard;
