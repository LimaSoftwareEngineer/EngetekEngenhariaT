import React from "react";
import Header from '../../components/HeaderHome';
import Footer from '../../components/Footer';
import BannerHero from "../../components/BannerHero";
import FormContact from "../../components/ContactForm";
import '../../styles/global.css';

export default function Contact() {
  return (
    <>
      <Header />
      <BannerHero pageId="contact" />
      <section className="contact-section">
        <FormContact />
      </section>
      <section id="map-section">
        <div class="container initial-hidden fade-in-scale-up delay-3">
          <h2 class="section-title">Encontre-nos</h2> {/* Título ajustado, já que o endereço é específico */}
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.341416390141!2d-63.89679242551571!3d-8.736990491325603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92323e5953047d15%3A0xc3ce111b110a2f7c!2sR.%20Pedro%20Albeniz%2C%206496%20-%20Nova%20Caiari%20I%2C%20Porto%20Velho%20-%20RO%2C%2076810-092!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do endereço na Rua Pedro Albeniz, 6496"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}