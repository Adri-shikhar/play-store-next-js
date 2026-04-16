import React from 'react'
import Hero from './Hero/Hero'
import Score from './Score/Score'


export default function Home() {
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <Score />
        </div>
    )
}
