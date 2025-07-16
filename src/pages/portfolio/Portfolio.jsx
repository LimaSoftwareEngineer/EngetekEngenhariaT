import React, { useState } from 'react';
import Header from '../../components/HeaderHome';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsappButton';
import BannerHero from '../../components/BannerHero';
import projects from '../../assets/Portfolio.json';
import '../../styles/global.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('Todos');

  const categories = [
    'Todos',
    'Obra Pública',
    'Laboratório',
    'Reforma Comercial',
    'Manutenção Predial',
    'Cercamento',
    'Industrial',
    'Residencial',
    'Comercial',
    'Pública'
  ];

  const filteredProjects = filter === 'Todos'
    ? projects
    : projects.filter(project => Array.isArray(project.category) && project.category.includes(filter));

  return (
    <>
      <Header />
      <BannerHero pageId="portfolio" />
      <section className="portfolio">
        <article className='article-information'>
          <h2><span style={{ color: '#FF5704' }}>ENGETEK</span>: Evolução Contínua para Você</h2>
          <p>
            Na Engetek, a busca pela excelência é incessante.
            Estamos em constante evolução, aprimorando nossas soluções para levar o que há de mais avançado em tecnologia e produtividade aos nossos clientes.
            Nosso compromisso é com o seu sucesso, garantindo que você tenha sempre acesso às ferramentas e inovações que impulsionam o seu negócio para o futuro.
            Conte com a Engetek para transformar desafios em oportunidades, otimizando seus processos e maximizando seus resultados com as melhores soluções do mercado.
          </p>
        </article>
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-button ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="card-inner">
                <div className="card-front">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-info-front">
                    <h3>{project.title}</h3>
                    <span className="project-category">
                      {Array.isArray(project.category) ? project.category.join(', ') : project.category || 'Sem categoria'}
                    </span>
                  </div>
                </div>
                <div className="card-back">
                  <div className="project-info-back">
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Portfolio;
