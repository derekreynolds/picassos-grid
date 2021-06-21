import React from 'react'
import './Header.scss'

interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => {
    return (
        <header className="Header">
            {props.title}
        </header>
    )
}

export default Header
