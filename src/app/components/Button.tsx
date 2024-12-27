"use client"

import { MouseEventHandler } from "react"

export const Button = ({text, onClick}: {text: string, onClick: MouseEventHandler<HTMLButtonElement> }) => {
    return (<button onClick={onClick}>{text}</button>)
}