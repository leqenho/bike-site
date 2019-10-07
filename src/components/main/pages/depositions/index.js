import React from 'react';

import icon from '../../../../assets/images/icon-twitter.png';

const Depositions = () => (
    <section id="depositions" className="app-depositions">
        <div className="container pt-2 pb-4">
            <div id="carousel-depositions" className="carousel slide py-5" data-ride="carousel">
                <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                        <img className="mb-3" src={icon} alt="Migué" />
                        <h5 className="mb-3">AOD New York @aod <span>/ 35 min</span></h5>
                        <p className="mb-3">Lorem ipsum sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullian a odio porttitor, dictum turpis vitae, pretium ante amet.</p>
                    </div>
                    <div className="carousel-item">
                        <img className="mb-3" src={icon} alt="Migué" />
                        <h5 className="mb-3">AOD New York @aod <span>/ 35 min</span></h5>
                        <p className="mb-3">Lorem ipsum sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullian a odio porttitor, dictum turpis vitae, pretium ante amet.</p>
                    </div>
                    <div className="carousel-item">
                        <img className="mb-3" src={icon} alt="Migué" />
                        <h5 className="mb-3">AOD New York @aod <span>/ 35 min</span></h5>
                        <p className="mb-3">Lorem ipsum sit amet, consectetur adipiscing elit. Sed ut tellus ac nulla semper rhoncus. Nullian a odio porttitor, dictum turpis vitae, pretium ante amet.</p>
                    </div>
                </div>
                
                <ol className="carousel-indicators">
                    <li data-target="#carousel-depositions" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-depositions" data-slide-to="1"></li>
                    <li data-target="#carousel-depositions" data-slide-to="2"></li>
                </ol>
            </div>
        </div>
    </section>
);

export default Depositions;
