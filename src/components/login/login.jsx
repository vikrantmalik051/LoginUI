import React, { Component } from "react";
import "./login.css";
import pclub from "../../pclub.png";

class Login extends Component {
  render() {
    return (
      <div className="text-center thisdiv">
        <form className="form-signin">
          <img className="mb-4" src={pclub} alt="" width="142" height="142" />
          <br />
          <br />
          <label className="sr-only">Username</label>
          <input
            type="text"
            id="inputEmail"
            className="form-control"
            placeholder="Username"
            required
          />
          <label className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <br />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

class Last extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <p>Hello</p>
        {this.state.show ? <Login /> : null}
      </div>
    );
  }
}

//export default Last;

export default Login;

{
  /* <body className="text-center">
<form class="form-signin">
<img class="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
<label for="inputEmail" class="sr-only">Email address</label>
<input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
<label for="inputPassword" class="sr-only">Password</label>
<input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
<div class="checkbox mb-3">
<label>
  <input type="checkbox" value="remember-me"> Remember me
</label>
</div>
<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
<p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
</form>
</body> */
}
