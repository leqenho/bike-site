import React from 'react';

import Article from '../../../../assets/images/about-icon.png';

const About = () => (
    <section id="about">
        <article className="container">
            <div className="row">
                <div className='col py-5'>
                    <img className="article-img mb-3 mt-md-4" src={Article} alt="Icon Article" />
                    <h5 className="article-title mb-3 text-center">A new generation of vintage bike</h5>
                    <p className="article-text m-0 mb-md-4 text-justify text-md-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </article>
    </section>
);

export default About;
