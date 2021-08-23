import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Nick Hinds - Know Your Vote</title>
            <meta name="description" content="Voter information App" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Know Your Vote</h1>
                    </header>
                    <span className="image main">
                        <StaticImage 
                                src="../assets/images/finger_point_up.png"
                                width={300}
                                alt="one vote"
                        />   
                    </span>
                    <p>Know Your Vote is an Android app that provides users with state specific rules for voting and registering to vote.</p>
                    <br>
                    </br>
                    <p>Users can register to vote and learn about there rights as a vote.</p>
                    <br>
                    </br>
                    <p>There is also a light heart game where the user spins a wheel to find out there potilical orientation.</p>
                    <br>
                    </br>
                    <ul className="actions">
                        <li><Link to="https://github.com/Nhinds88/Know_Your_Vote" className="button next">Github</Link></li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic