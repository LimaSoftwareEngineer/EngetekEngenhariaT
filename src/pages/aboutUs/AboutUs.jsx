import React from "react";
import HeaderHome from '../../components/HeaderHome';
import BannerHero from "../../components/BannerHero";
import Footer from "../../components/Footer";
import CarouselTeam from "../../components/CarouselTem";
import '../../styles/global.css';

export default function AboutUs() {
  return (
    <>
      <HeaderHome />
      <BannerHero pageId="aboutUs" />
      <main className="about-main">
        <div className="timeLine-story">
          <h2>Nossa História</h2>
        </div>
        <div className="line"></div>
        <section className="line-time-section">
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-card">
                <div class="timeline-card-front">2015</div>
                <div class="timeline-card-back">Nossa jornada começou com uma visão inovadora para transformar o mercado digital.</div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-card">
                <div class="timeline-card-front">2018</div>
                <div class="timeline-card-back">Expandimos globalmente, trazendo tecnologia de ponta para novos mercados.</div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-card">
                <div class="timeline-card-front">2022</div>
                <div class="timeline-card-back">Lançamos produtos revolucionários que redefiniram nossa indústria.</div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-card">
                <div class="timeline-card-front">2025</div>
                <div class="timeline-card-back">Lideramos com IA e sustentabilidade, moldando o futuro a partir de hoje.</div>
              </div>
            </div>
          </div>
        </section>
        <div className="line"></div>
        <section className="aboutUs-section">
          <h2>Como á <span style={{ color: '#FF5704' }}>ENGETEK</span> Pensa</h2>
          <div className="card-container">
            <div className="card-item">
              <div className="card-icon">🌐</div>
              <h5 className="card-title">Visão</h5>
              <p className="card-text">Liderar globalmente em tecnologia sustentável, transformando vidas até 2030 com inovação disruptiva.</p>
            </div>
            <div className="card-item">
              <div className="card-icon">🎯</div>
              <h5 className="card-title">Missão</h5>
              <p className="card-text">Criar soluções avançadas que empoderem pessoas e empresas, promovendo impacto positivo e crescimento.</p>
            </div>
            <div className="card-item">
              <div className="card-icon">❤️</div>
              <h5 className="card-title">Valores</h5>
              <p className="card-text">Integridade, inovação, sustentabilidade e colaboração, pilares de nossas ações em 2025 e além.</p>
            </div>
          </div>
        </section>
        <CarouselTeam />
      </main>
      <Footer />
    </>
  )
}