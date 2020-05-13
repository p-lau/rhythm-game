import React from "react"
import {PROFILES, SEO} from "../components"
import {useParams} from "react-router";

export const Portfolio = () => {
    const { id } = useParams()
    const profile = PROFILES.filter(profile => profile.id === id)


    return (
        <div className="page portfolio">
            <header>
                <h1>{PROFILES}</h1>
            </header>
            <main>
                <SEO title={'Meet the group'} description={'The section about the Team 2/4 crew'}/>
                {PROFILES.map((e, i)=>{
                    return(
                        <div className={'card'} key={i}>
                            <img src={e.image} alt={`${e.name}'s profile`}/>
                            <h1>{e.name}</h1>
                            <small>{e.text}</small>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}