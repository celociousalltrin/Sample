import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    username: ""
  });
  const [form, setForm] = useState({
    password: ""
  });

  const handleChange1 = (event) => {
    setUser({ username: event.target.value });
  };
  const handleChange2 = (event) => {
    setForm({ password: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({...user ,...form});
  };
  return (
    
        <form onSubmit={handleSubmit}>
          <h6 className="text-dark font-weight-bold">Login Page</h6>
          <div>
            <label htmlfor="exampleFormControlInput1" className="form-label ">
              Username
            </label>
            <input
              type="email"
              className="form-control"
              value={user.username}
              onChange={(e) => handleChange1(e, "username")}
              id="exampleFormControlInput1"
              placeholder="name@example.com" 
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlfor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={form.password}
              className="form-control"
              id="password"
              onChange={(e) => handleChange2(e, "password")}
              placeholder="password"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>

  );
};
