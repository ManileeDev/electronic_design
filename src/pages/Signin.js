import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <>
            <nav className="navbar">
                <div className="brand">
                    <h3>Electro</h3>
                </div>
                <div className="navbar-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Explore</Link></li>
                        <li><Link>Create</Link></li>
                    </ul>
                    <div className="navbar-icons">
                        <div>
                            <i className="bi bi-search"></i>
                        </div>
                        <div>
                            <i className="bi bi-bookmark"></i>
                        </div>
                        <div>
                            <i className="bi bi-cart3"></i>
                        </div>
                    </div>
                    <div className="navbar-profile">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0jiGO0t0BdYp9MGGYe4Qe9m2AVmMDmO29w&usqp=CAU" alt="" />
                    </div>
                </div>
            </nav>

            <div className="main-layout">
                <div className="login">
                    <div className="login-banner">
                        <img src="https://www.shutterstock.com/image-vector/computer-display-vector-design-program-600nw-1963110571.jpg" alt="" />
                    </div>
                    <div className="form-layout">
                        <h5>Welcome back. Sign in to continue</h5>
                        <form action="" className="form-style" onSubmit={(e)=>e.preventDefault()}>
                            <div className="user-group">
                                <label for="">Username</label>
                                <input type="text" className="input-style" placeholder="Username" />
                            </div>
                            <div className="password-group">
                                <label for="password">Password</label>
                                <input type="text" className="input-style" placeholder="Password" />
                            </div>
                            <div className="sign-button">
                                <button><Link to="/">Sign in</Link></button>
                            </div>
                        </form>

                        <p>Or sign in with</p>
                        <div className="google-accounts">
                            <div className="account-box">
                                <i className="bi bi-google"></i>
                                <small> Google</small>
                            </div>
                            <div className="account-box">
                                <i className="bi bi-facebook"></i>
                                <small> Facebook</small>
                            </div>
                            <div className="account-box">
                                <i className="bi bi-linkedin"></i>
                                <small> LinkedIn</small>
                            </div>
                        </div>
                        <div className="footer-links">

                            <p>Don't have an account?</p>
                            <p> <Link to="/">Sign up</Link></p>

                        </div>

                    </div>
                </div>
            </div></>
    )
}

export default Signin