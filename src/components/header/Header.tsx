import React, {useEffect} from 'react'
import './Header.scss'

interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => {
    useEffect(() => {
        document.title = props.title;
    });
    return (
        <header className="Header">
            {props.title}
        </header>
    )
}

export default Header
