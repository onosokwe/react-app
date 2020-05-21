import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/Header';

function Home() {
    return (
        <React.Fragment>
            <Header />
            <section>
                <div className="learn_top">
                    <div className="row">
                        <div className="learn_big">
                            <h1>Learn the basics of programming at no cost.</h1>
                            <p>Starting from beginner courses to expert courses, give yourself a career shift with the Learn at Devamplify free online programming courses.</p>
                            <Link to="/courses">EXPLORE COURSES</Link>
                        </div>
                    </div>
                </div>
                <div className="learn_data">
                    <div className="learn_box">
                        <div className="data_third">
                            <h1>12 <sup>technologies</sup></h1>
                            <p>in web development.</p> 
                        </div>
                        <div className="data_third">
                            <h1>240 <sup>courses</sup></h1>
                            <p>by worldclass teachers.</p> 
                        </div>
                        <div className="data_third">
                            <h1>600 <sup>students</sup></h1>
                            <p>actively learning.</p> 
                        </div>
                    </div>
                </div>
                <div className="modules">
                    <h1>What You Will Learn</h1>
                    <div className="twenty half">
                        <Link to="/html"><div className="modulebox html"><div className="module"><i class="fa fa-html5"></i></div></div></Link>
                        <p>HTML </p>
                    </div>
                    <div className="twenty half">
                        <Link to="/"><div className="modulebox css"><div className="module"><i className="fa fa-css3"></i></div></div></Link>
                        <p>CSS </p>
                    </div>
                    <div className="twenty half">
                        <Link to="/"><div className="modulebox sass"><div class="module"><i className="fab fa-sass"></i></div></div></Link>
                        <p>SASS</p>
                    </div>
                    <div className="twenty half last">
                        <Link to="/"><div className="modulebox boots"><div className="module"><i className="fa fa-css3"></i></div></div></Link>
                        <p>Bootstrap</p>
                    </div>
                    <div class="twenty half">
                        <Link to="/"><div class="modulebox php"><div className="module"><i className="fab fa-laravel"></i></div></div></Link>
                        <p>PHP</p>
                    </div>
                    <div class="twenty half">
                        <Link to="/"><div class="modulebox sql"><div class="module"><i className="fa fa-database"></i></div></div></Link>
                        <p>SQL</p>
                    </div>
                    <div className="twenty half">
                        <Link to="/"><div className="modulebox javascript"><div className="module"><i className="fab fa-js-square"></i></div></div></Link>
                        <p> Javascript</p>
                    </div>
                    <div className="twenty half last">
                        <Link to="/"><div className="modulebox jquery"><div className="module"><i className="fa fa-codepen"></i></div></div></Link>
                        <p>jQuery</p>
                    </div>
                    <div className="twenty half">
                        <Link to="/"><div className="modulebox angular"><div className="module"><i className="fab fa-angular"></i></div></div></Link>
                        <p>Angular</p>
                    </div>
                    <div className="twenty half">
                        <Link to="/"><div className="modulebox react"><div className="module"><i className="fab fa-react"></i></div></div></Link>
                        <p>React</p>
                    </div>
                    <div className="twenty half">
                        <Link to="/"><div className="modulebox vue"><div className="module"><i className="fab fa-vuejs"></i></div></div></Link>
                        <p>Vue</p>
                    </div>
                    <div className="twenty half last">
                        <Link to="/"><div className="modulebox node"><div className="module"><i className="fab fa-node-js"></i></div></div></Link>
                        <p>Node.js</p>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
    
}

export default Home;
