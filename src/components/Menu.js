import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/traffictracer">Traffic Tracer</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/knowyourvote">Know Your Vote</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/solar">Solar</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/raspidisplay">rasPi Display</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/alieninvasion">Alien Invasion</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/twitterscrapper">Twitter Scrapper</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="https://github.com/Nhinds88" className="button special fit">Github</a></li>
                <li><a href="#" className="button fit">????</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
