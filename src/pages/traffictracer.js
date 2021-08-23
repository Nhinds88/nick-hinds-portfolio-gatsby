import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Nick Hinds - Traffic Tracer</title>
            <meta name="description" content="Traffic Tracer merchant foot traffic App" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Traffic Tracer</h1>
                    </header>
                    <span className="image main">
                        <StaticImage 
                            src="../assets/images/traffictracer.gif"
                            width={300}
                            alt="traffic tracer logo"
                        />
                    </span>
                    <p>Traffic Tracer is a Python and Web Application that seeks to use a merchants pre-existing camera system to gather foot traffic data and present this data in friendly easy to read manner.</p>
                    <br>
                    </br>
                    <p>Using OpenCV with Python, the application processes the video footage from the merchants camera system.</p>
                    <br>
                    </br>
                    <p>The web portal is built using Node.js and express, along with PDFMAKE and Chart.JS for the reporting modules.</p>
                    <br>
                    </br>
                    <ul className="actions">
                        <li><Link to="https://traffic-tracer.herokuapp.com/" className="button next">Heroku</Link></li>
                        <li><Link to="https://github.com/Nhinds88/Traffic_Tracer" className="button next">Github</Link></li>
                    </ul>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic