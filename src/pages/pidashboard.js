import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Nick Hinds - Pi - Dashboard</title>
            <meta name="description" content="Pi - Dashboard" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Pi - Dashboard</h1>
                    </header>
                    <span className="image main">
                        <StaticImage 
                            src="../assets/images/Raspi.png"
                            width={300}
                            alt="twitter"
                        />
                    </span>
                    <p>A React Project built to be used a screen attached to a raspberry pi. It features movable tiles that snap in place as need, along with API calls for twitter, crypto prices, news headlines and weather.</p>
                    <br>
                    </br>
                    <ul className="actions">
                        <li><Link to="https://github.com/Nhinds88/pi-dashboard" className="button next">Github</Link></li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic