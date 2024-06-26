import {React} from 'react';
export default function Header() {
    return(
        <div style={{backgroundColor:""}} className="container">
            <div className="navbar">
                <a href="#" className="logo"><h1>Shopping</h1></a>
                <ul className="navitems">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Order</a></li>
                </ul>
            </div>
        </div>
    );
}