import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/traffictracer.gif'
import pic02 from '../assets/images/finger_point_up.png'
import pic03 from '../assets/images/solar.png'
import pic04 from '../assets/images/ATATCockpit.png'
import pic05 from '../assets/images/spaceship.png'
import pic06 from '../assets/images/Twitter-logo-png-5859_-_Copy.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Nick Hinds"
                    meta={[
                        { name: 'description', content: 'My Website' },
                        { name: 'keywords', content: 'Portfolio, CV' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Traffic Tracer</h3>
                                <p>An application that uses a businesses pre-existing camera system to gather foot traffic data.</p>
                            </header>
                            <Link to="/traffictracer" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Know Your Vote</h3>
                                <p>An Android application that provides state specific rules and regulations for registering to vote and voting in general.</p>
                            </header>
                            <Link to="/knowyourvote" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Solar</h3>
                                <p>A real time render of the solar system using javascript/webgl.</p>
                            </header>
                            <Link to="/solar" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>rasPi Display</h3>
                                <p>A Raspberry Pi project using Python to green screen an image and web scrapping to display news headlines.</p>
                            </header>
                            <Link to="/raspidisplay" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Alien Invasion</h3>
                                <p>A 2d alien invasion game written in Python.</p>
                            </header>
                            <Link to="/alieninvasion" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Twitter Scrapper</h3>
                                <p>A web scrapper written in Python to gather tweets based off of a user entered keyword.</p>
                            </header>
                            <Link to="/twitterscrapper" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>A little about me</h2>
                            </header>
                            <p>I am a recent grad at CSUMB (California State University Monterey Bay) from the Computer Science Program. I focused my studies and experience there on Software Engineering. Throughout school and now I have been working as a Techinical Support Analyst where from time to time I have been able to apply some of my knowledge gained from studies to my work. When I am not studying or I like to build DIY projects mostly with various Raspberry Pi boards and recently have been deliving more into projects that involve various computer vision technologies. Feel free to checkout my Linkdin and Github...</p>
                            <ul className="actions">
                                <li><Link to="https://github.com/Nhinds88" className="button next">Github</Link></li>
                                <li><Link to="www.linkedin.com/in/nicholas-m-hinds" className="button next">Linkdin</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex