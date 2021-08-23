import React from 'react'
// import hindsight from "../assets/images/hindsight.svg"

// const Banner = () => {
//     return (
//         <section id="banner" className="major">
//             <div className="inner">
//                 <header className="major">
//                     <img src={hindsight} alt="logo" />
//                     <h1 className="ml11">
//                         <span classname="test-wrapper">
//                             <span classname="line line1"></span>
//                             <span classname="letters">Welcome, my name is Nick...</span>
//                         </span>
//                     </h1>
//                 </header>
//                 <div className="content">
//                     <p>I am a recent graduate at CSUMB's Computer Science program. I like building web and mobile projects, check out some of projects below!</p>
//                     <ul className="actions">
//                         <li><a href="#one" className="button next scrolly">Projects</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     )
// }


const Banner = (prop) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                {/* <img src={hindsight} alt="logo" /> */}
                <h1>Hi, my name is Nick</h1>
            </header>
            <div className="content">
                <p>I am a recent graduate at CSUMB's Computer Science program. I like building web and mobile projects, check out some of projects below!</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Projects</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
