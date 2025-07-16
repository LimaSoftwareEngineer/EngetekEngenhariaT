import React from "react";
import Header from "../../components/HeaderHome";
import Footer from "../../components/Footer";
import FotoInstagram from "../../assets/portfolio/CONDOMÍNIO VERANA.png";
import FotoInstagram2 from "../../assets/portfolio/PRAÇA DAS CAMÉLIAS.png";
import FotoInstagram3 from "../../assets/portfolio/CALZOON SUCOS E CALZOONES.png";
import '../../styles/global.css';

export default function Home() {
  return (
    <>
      <Header />
      <section className="carousel">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={FotoInstagram} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={FotoInstagram2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={FotoInstagram3} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}