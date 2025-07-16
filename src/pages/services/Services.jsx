import React, { useState, useEffect, useRef } from "react";
import Header from '../../components/HeaderHome';
import Footer from '../../components/Footer';
import BannerHero from "../../components/BannerHero";
import servicesData from '../../assets/Services.json';
import '../../styles/global.css';


export default function Services() {
  const [currentService, setCurrentService] = useState(null);

  const modalRef = useRef(null);
  const bsModal = useRef(null);

  useEffect(() => {
    if (window.bootstrap && modalRef.current) {
      bsModal.current = new window.bootstrap.Modal(modalRef.current);

      modalRef.current.addEventListener('show.bs.modal', () => {
        console.log('Modal do Bootstrap está abrindo');
      });
      modalRef.current.addEventListener('hidden.bs.modal', () => {
        console.log('Modal do Bootstrap foi fechado');
        setCurrentService(null);
      });
    }

    return () => {
      if (bsModal.current) {
        bsModal.current.dispose();
      }
    };
  }, []);

  const handleServiceClick = (serviceId) => {
    const serviceData = servicesData[serviceId];
    if (serviceData) {
      setCurrentService(serviceData);
      if (bsModal.current) {
        bsModal.current.show();
      }
    }
  };

  return (
    <>
      <Header />
      <BannerHero pageId="services" />
      <main className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {Object.keys(servicesData).map((key) => (
            <div className="col" key={key}>
              <div
                className="service-grid-item text-center p-4 rounded shadow-sm"
                onClick={() => handleServiceClick(key)}
              >
                <div className="item-icon mb-3">
                  {key === 'structural' && <i className="fas fa-sitemap"></i>}
                  {key === 'geotechnical' && <i className="fas fa-mountain"></i>}
                  {key === 'hydraulics' && <i className="fas fa-faucet"></i>}
                  {key === 'electrical' && <i className="fas fa-bolt"></i>}
                  {key === 'safety' && <i className="fas fa-user-shield"></i>}
                  {key === 'management' && <i className="fas fa-chart-line"></i>}
                </div>
                <h3 className="item-title">{servicesData[key].title}</h3>
                <p className="item-short-desc">{servicesData[key].description.split('.')[0]}.</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      <div className="modal fade" id="serviceModal" tabIndex="-1" aria-labelledby="serviceModalLabel" aria-hidden="true" ref={modalRef}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="serviceModalLabel">Detalhes do Serviço</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {currentService && (
                <>
                  <h3 className="modal-service-title">{currentService.title}</h3>
                  <p className="modal-service-full-desc">{currentService.description}</p>
                  <ul className="modal-service-features">
                    {currentService.features.map((feature, index) => (
                      <li key={index}><i class="bi bi-check2-all" style={{ color: "green", marginRight: "5px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
                          <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                          <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                        </svg>
                      </i>{feature}</li>
                    ))}
                  </ul>
                  <a href='/Contact' className="btn mt-3 modal-service-cta btn-contact">Entre em Contato</a>
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}