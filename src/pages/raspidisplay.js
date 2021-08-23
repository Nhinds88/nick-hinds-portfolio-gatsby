import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Nick Hinds - rasPi Display</title>
            <meta name="description" content="rasPi Information" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>rasPi Display</h1>
                    </header>
                    <span className="image main">
                        <StaticImage 
                            src="../assets/images/ATATCockpit.png"
                            width={300}
                            alt="cockpit"
                        /> 
                    </span>
                    <p>rasPi Display is a project for the raspberry pi to build a news headline display.</p>
                    <br>
                    </br>
                    <p>It uses Python to scrapp BBC headlines form the world news page.</p>
                    <br>
                    </br>
                    <p>It uses Pygame and some Python to merge to images together to build the display on the screen.</p>
                    <br>
                    </br>
                    <ul className="actions">
                        <li><Link to="https://github.com/Nhinds88/rasPi_display" className="button next">Github</Link></li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic