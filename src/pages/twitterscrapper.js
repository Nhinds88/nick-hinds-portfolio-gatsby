import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Nick Hinds - Twitter Scrapper</title>
            <meta name="description" content="Twitter Keyword Scrapper" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Twitter Scrapper</h1>
                    </header>
                    <span className="image main">
                        <StaticImage 
                            src="../assets/images/Twitter-logo-png-5859_-_Copy.png"
                            width={300}
                            alt="twitter"
                        />
                    </span>
                    <p>A Python Script that allows the user to enter a keyword, which it generates a CSV files with all the tweets related to that keyword.</p>
                    <br>
                    </br>
                    <ul className="actions">
                        <li><Link to="https://github.com/Nhinds88/twitterscaper" className="button next">Github</Link></li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic