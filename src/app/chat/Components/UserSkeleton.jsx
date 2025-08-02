'use client'

import { useEffect } from "react"

export default function UserSkeleton({ height, width }) {


    useEffect(() => {
    }, [height, width])

    return (
        <div
            style={{ height, width }}
            className={` rounded-md bg-gradient-to-b from-fuchsia-300/10 to-gray-100/10 backdrop-blur-sm animate-pulse `} />
    )
}