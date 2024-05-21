import * as React from "react"
import * as style from "./tag.module.css";


const Tag = ({children}: {children: React.ReactNode}) => {
    return <span className={style.tag}>{children}</span>
}

export default Tag