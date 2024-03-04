<template>
    <div class="container">
      <form>
        <h2 class="">Register</h2>
        <div class="input">
          <label>Name</label>
          <input
            class="form-control"
            type="text"
            name="name"
            placeholder="name"
          />
        </div>
        <div class="input">
          <label>Username</label>
          <input
            class="form-control"
            type="text"
            name="username"
            placeholder="username"
          />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <div class="input">
          <label>Email</label>
          <input
            class="form-control"
            type="email"
            name="email"
            placeholder="email@example.com"
          />
        </div>
        <div class="input">
          <label>Tel</label>
          <input
            class="form-control"
            type="text"
            name="tel"
            placeholder="092-222-2222"
          />
        </div>
        <div class="input">
          <label>Address</label>
          <textarea
            class="form-control"
            type="text"
            name="address"
            placeholder="Ladkrabang Soi 13"
          ></textarea>
        </div>
        <button type="submit" id="login_button">
          Register
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
  
  };
  </script>
  
  <style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }
  
  form {
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .input {
    margin-bottom: 15px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  div {
    margin-bottom: 15px;
  }
  
  span {
    color: blue;
    cursor: pointer;
  }
  
  #login_button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007DFF;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  
  #login_button:hover {
    background-color: #0056b3;
  }
  
  </style>