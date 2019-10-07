import React from 'react';

function getImg(image) {
    return require(`../../../../assets/images/${image}.png`);
}

const Bikes = () => (
    <section id="bikes" className="app-bikes">
        <section className="bike vintage-right">
            <figure className="m-0 position-relative">
                <img className="bg-top d-lg-none" src={getImg('bg-bike1')} alt="Migué" />
                <img className="manufacture-brand" src={getImg('logo-bike1')} alt="Migué" />
            </figure>
            <article>
                <header className="mx-auto">
                    <img className="mb-3 mx-auto d-block" src={getImg('icon-bike1')} alt="Icon Vintage Oliva" />
                    <h5 className="text-center mb-3">Vintage Oliva</h5>
                    <p className="text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery od type and scrambled it to make a type specimen book. It has survived.
                    </p>
                </header>
                <img className="bottom-img" src={getImg('img-bike1')} alt="Acento vermelho da bike" />
            </article>
        </section>
        <section className="bike vintage-left">
            <figure className="m-0 position-relative order-lg-2">
                <img className="bg-top d-lg-none" src={getImg('bg-bike2')} alt="Migué" />
                <img className="manufacture-brand" src={getImg('logo-bike2')} alt="Migué" />
            </figure>
            <article className=" order-lg-1">
                <header className="mx-auto">
                    <img className="mb-3 mx-auto d-block" src={getImg('icon-bike2')} alt="Icon La Boriosa" />
                    <h5 className="text-center mb-3">La Boriosa</h5>
                    <p className="text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery od type and scrambled it to make a type specimen book. It has survived.
                    </p>
                </header>
                <img className="bottom-img" src={getImg('img-bike2')} alt="Acento preto da bike" />
            </article>
        </section>
        <section className="bike vintage-middle">
            <figure className="m-0 position-relative">
                <img className="bg-top d-lg-none" src={getImg('bg-bike3')} alt="Migué" />
                <img className="bg-top d-lg-none" src={getImg('img-bike')} alt="Migué" />
                <img className="manufacture-brand" src={getImg('logo-bike3')} alt="Migué" />
            </figure>
            <article>
                <header className="mx-auto">
                    <img className="mb-3 mx-auto d-block" src={getImg('icon-bike3')} alt="Icon Retro Bike" />
                    <h5 className="text-center mb-3">Retrò Bie - M. Hulot</h5>
                    <p className="text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery od type and scrambled it to make a type specimen book. It has survived.
                    </p>
                </header>
                <img className="bottom-img" src={getImg('img-bike3')} alt="Adesivo da fábrica da bike no aro" />
            </article>
            <figure className="m-0 d-none d-lg-block"></figure>
        </section>
    </section>
);

export default Bikes;
