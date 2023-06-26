import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch profile');
                }
            })
            .then((userInfo) => {
                setUserInfo(userInfo);
            })
            .catch((error) => {
                console.error(error);
                // Handle the error state or display an error message
            });
    }, []);

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST',
        })
            .then(() => {
                setUserInfo(null);
            })
            .catch((error) => {
                console.error(error);
                // Handle the error state or display an error message
            });
    }

    const username = userInfo?.username;

    return (
        <header>
            <Link to="/" className="logo">
                MyBlog
            </Link>
            <nav>
                {username && (
                    <>
                        <Link to="/create">Create new post</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}
