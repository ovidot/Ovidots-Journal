import React from "react";
import Namebar from "../components/Namebar";
import Blogbanner from "../components/Blogbanner";
import "../../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

const OtherPostComponent = () => {
  return (
    <>
      <div className="card" style={{ width: "20rem" }}>
        <div className="card-body">
          <h3 className="card-title">Day and title</h3>
          <p className="card-text">date posted</p>
          <p className="card-text">
            Some quick example text which should be replaced with the short
            content of the card.
          </p>
          <a href="#" className="btn btn-primary">
            Continue reading...
          </a>
        </div>
      </div>
    </>
  );
};

const index = () => {
  return (
    <>
      <Namebar />
      <div className="container">
        <div className="row">
          <Blogbanner />
        </div>
        <div className="row">
          <div className="col-md-9">
            <h3>My first day learning react</h3>
            <hr></hr>
            <h5>Apr 28 2023</h5>
            <div>
              <p>This is first paragraph</p>
              <p>This is first paragraph</p>
              <p>This is first paragraph</p>
              <p>This is first paragraph</p>
              ive learned about:
              <ul>
                <li>es6</li>
                <li>components</li>
                <li>Destrocturing</li>
                <li>JSX</li>
                <li>Page Routing</li>
              </ul>
              <p>
                Ive used alot of google referencing and youtube videos for
                clarification and understanding
              </p>
              <hr></hr>
              <h4>
                Comments
                <p>Login to leave a comment</p>
              </h4>
              <div>
                <p>
                  <b>Username</b>
                </p>
                <p>date posted</p>
                <p>comment</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h3>Other Posts</h3>
            <hr></hr>
            <OtherPostComponent />
            <OtherPostComponent />
            <OtherPostComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
