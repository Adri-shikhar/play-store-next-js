import React from 'react'
import Hero from './Hero/Hero'
import Score from './Score/Score'
import Apps from '../Apps/Apps'

export default function Home() {
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <Score />
            <Apps />
        </div>
    )
}
