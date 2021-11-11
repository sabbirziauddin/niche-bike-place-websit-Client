import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
           
            <section className ='main'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h2>
                                Awesome cycle collection
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat beatae dolorum possimus quos deleniti soluta maiores deserunt voluptate dicta adipisci?</p>
                            <a href="" className="readmore"> ReadMore</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;