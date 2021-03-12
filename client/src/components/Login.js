import React from 'react'

function Login() {
  return (
    <div>

    {/* Login Form */}

      <div>
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="username" />
          <button>Login</button>
        </form>
      </div>


    {/* Register Form */}

      <div>
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="name" />
          <button>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Login
