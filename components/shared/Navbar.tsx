import * as React from "react";
import Link from "next/link";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    conduit
                </a>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link active">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/user/new-post">
                            <a className="nav-link">
                                <i className="ion-compose"></i>&nbsp;New Post
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/user/setting">
                            <a className="nav-link">
                                <i className="ion-gear-a"></i>&nbsp;Settings
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/auth/register">
                            <a className="nav-link">Sign up</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
