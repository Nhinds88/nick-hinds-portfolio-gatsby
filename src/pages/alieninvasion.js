import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Nick Hinds - Alien Invasion</title>
            <meta name="description" content="Alien Invasion Game" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Alien Invasion</h1>
                    </header>
                    <span className="image main">
                        <StaticImage 
                            src="../assets/images/spaceship.png"
                            width={300}
                            alt="spaceship"
                        />    
                    </span>
                    <p>A 2D game built using Pygame.</p>
                    <br>
                    </br>
                    <ul className="actions">
                        <li><Link to="https://github.com/Nhinds88/Alien-Invasion" className="button next">Github</Link></li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic