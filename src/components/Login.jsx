import React from "react";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center text-success mb-4">🌱 AgroKart Login</h3>

        <form>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </div>

          {/* Link */}
          <div className="text-center mt-3">
            <small className="text-muted">Don't have an account? <a href="#">Sign up</a></small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
