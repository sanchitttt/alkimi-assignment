import React from 'react'
import Desktop from './desktop'
import Mobile from './mobile'

function Header() {
    return (
        <header>
            {/**Desktop Header */}
            <Desktop />
            {/**Mobile Header */}
            <Mobile />
        </header>
    )
}

export default Header