import React from 'react';
import './Header.css';

function Header() {
    return (
        console.log('Header'),
        (
            <div className="Header">
                <h3>중간고사</h3>
                <h2>2024.10.16 ~ 2024.10.17</h2>
                <br />
                <h3>현재 날짜</h3>
                <h1>{new Date().toLocaleDateString()}</h1>
            </div>
        )
    );
}

export default React.memo(Header);
