import * as React from "react"
import {Link} from "gatsby"

import * as style from "./header.module.css";


const Header = ({siteTitle}) => {

    return (
        <header
            className={style.header}
        >
            <div
                className={style.headerInner}
            >
                {siteTitle}

                <nav>
                    <Link to='/requests' >Страница с запросами</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
