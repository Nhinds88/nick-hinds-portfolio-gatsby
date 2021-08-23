import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Nick Hinds - Solar</title>
            <meta name="description" content="Solar System Rendering" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Solar</h1>
                    </header>
                    <span className="image main">
                        <StaticImage 
                            src="../assets/images/solar.png"
                            width={300}
                            alt="solar system"
                        />
                    </span>
                    <p>Solar is a live rendered display of the solar system built with javascript and webgl.</p>
                    <br>
                    </br>
                    <p>This project has mouse camera controls and accurate light reflections.</p>
                    <br>
                    </br>
                    <ul className="actions">
                        <li><Link to="https://cst325solar.herokuapp.com/" className="button next">Heroku</Link></li>
                        <li><Link to="https://github.com/Nhinds88/solar" className="button next">Github</Link></li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic