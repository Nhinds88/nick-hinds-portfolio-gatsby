import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Nick Hinds - Get Your Axe Together</title>
            <meta name="description" content="rasPi Information" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Get Your Axe Together</h1>
                    </header>
                    <span className="image main">
                        <StaticImage 
                            src="../assets/images/logo.png"
                            width={200}
                            alt="Logo"
                        /> 
                    </span>
                    <p>Get Your Axe Together is a eStore for fantasy armory store, base in a table top game some friends and I play together.</p>
                    <br>
                    </br>
                    <p>I built using Gatsby and Next.JS along with snipcart to facilitate the eStore cart/ checkout process.</p>
                    <br>
                    </br>
                    <p>Check out the links below to grab ye some steel worthy of great adventurer!</p>
                    <br>
                    </br>
                    <ul className="actions">
                        <li><Link to="https://get-your-axe-together.herokuapp.com/"  className="button next">Heroku</Link></li>
                        <li><Link to="https://github.com/Nhinds88/GetYourAxeTogether" className="button next">Github</Link></li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic