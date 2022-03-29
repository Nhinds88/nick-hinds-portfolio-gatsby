import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Contact = () => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">nhinds1988@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <StaticImage 
                            src="../assets/images/prof.png"
                            width={100}
                            alt="Nick"
                        />
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Location</h3>
                        <span>Adams Point<br />
                        Oakland, CA<br />
                        USA</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact