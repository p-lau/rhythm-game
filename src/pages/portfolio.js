import React from "react"
import {PROFILES, SEO} from "../components"
import {useParams} from "react-router";

export const Portfolio = () => {
    const { id } = useParams()
    const profile = PROFILES.filter(profile => profile.id === id)[0]
    console.log(profile)


    return (
        <div className="page blog">
            <header>
                <h1>{profile.name}</h1>
            </header>
            <main>
                <SEO title={profile.name} description={profile.text}/>
                <h2>Role</h2>
                <p>{profile.text}</p>
                {profile.gifs ? profile.gifs.map((e, i)=>{
                    return(
                        <img alt={i} key={i} src={e}/>
                    )
                }) : null}
                <iframe title={profile.name+"'s portfolio"} src={"/portfolio/"+profile.id+"_portfolio.pdf"} width="100%" height="800rem"/>
            </main>
        </div>
    )
}