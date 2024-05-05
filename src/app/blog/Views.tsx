'use client'
import { useEffect, useState } from "react"

const Views = () => {
    const [views, setViews] = useState<number>(0)

    return (
        <div>
            views
            {views}

            <button onClick={() => setViews(prev => prev += 1)}>inc view </button>
        </div>
    )
}
export default Views
