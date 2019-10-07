import React from 'react';

function getImg(image) {
    return require(`../../../../assets/images/${image}.png`);
}

const Shop = () => (
    <section id="shop">
        <figure className="galery m-0">
            <div className="elem elem-1">
                <img src={getImg('prod1')} alt="_" />
                <div className="overlay">
                    <img className="mb-2" src={getImg('icon-shop')} alt="_" />
                    <h6 className="m-0 text-white">Shop Now</h6>
                </div>
            </div>
            <div className="elem elem-2">
                <img src={getImg('prod2')} alt="_" />
                <div className="overlay">
                    <img className="mb-2" src={getImg('icon-shop')} alt="_" />
                    <h6 className="m-0 text-white">Shop Now</h6>
                </div>
            </div>
            
            <div className="elem elem-3">
                <img src={getImg('prod3')} alt="_" />
                <div className="overlay">
                    <img className="mb-2" src={getImg('icon-shop')} alt="_" />
                    <h6 className="m-0 text-white">Shop Now</h6>
                </div>
            </div>

            <div className="elem elem-4">
                <img src={getImg('prod4')} alt="_" />
                <div className="overlay">
                    <img className="mb-2" src={getImg('icon-shop')} alt="_" />
                    <h6 className="m-0 text-white">Shop Now</h6>
                </div>
            </div>

            <div className="elem elem-5">
                <img src={getImg('prod5')} alt="_" />
                <div className="overlay">
                    <img className="mb-2" src={getImg('icon-shop')} alt="_" />
                    <h6 className="m-0 text-white">Shop Now</h6>
                </div>
            </div>

            <div className="elem elem-6">
                <img src={getImg('prod6')} alt="_" />
                <div className="overlay">
                    <img className="mb-2" src={getImg('icon-shop')} alt="_" />
                    <h6 className="m-0 text-white">Shop Now</h6>
                </div>
            </div>

            <div className="elem elem-7">
                <img src={getImg('prod7')} alt="_" />
                <div className="overlay">
                    <img className="mb-2" src={getImg('icon-shop')} alt="_" />
                    <h6 className="m-0 text-white">Shop Now</h6>
                </div>
            </div>
            <div className="elem elem-8">
                <img src={getImg('prod8')} alt="_" />
                <div className="overlay">
                    <img className="mb-2" src={getImg('icon-shop')} alt="_" />
                    <h6 className="m-0 text-white">Shop Now</h6>
                </div>
            </div>
        </figure>
        <section className="discover d-flex justify-content-center align-items-center py-5">
            <button className="discover-btn my-5 py-3 px-5 text-uppercase text-white">Discover the shop</button>
        </section>
    </section>
);

export default Shop;
