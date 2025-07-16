import React, { useState, useEffect } from "react";
import Team from '../assets/Team.json';
import '../styles/global.css';

export default function CarouselTeam() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    setTeamMembers(Team);
  }, []);

  const groupMembers = (members, maxSize) => {
    const groups = [];
    for (let i = 0; i < members.length; i += maxSize) {
      groups.push(members.slice(i, i + maxSize));
    }
    return groups;
  };

  const memberGroups = groupMembers(teamMembers, 3);

  const getColumnclass = (groupLength) => {
    switch (groupLength) {
      case 1:
        return "col-12";
      case 2:
        return "col-6";
      case 3:
        return "col-4";
      default:
        return "col-4";
    }
  };

  return (
    <section className="team-carousel-section">
      <div className="carousel-container">
        <h2 className="team-title">Nosso Time <span className="highlight">ENGETEK</span></h2>
        <div className="team-text">
          <p>A Engetek se orgulha de sua equipe: mais de 30 funcionários altamente qualificados e mais de 10 parceiros estratégicos.
            Essa combinação poderosa não é apenas um número, mas a força motriz de um time que opera em perfeita sintonia.
            Juntos, esses profissionais e colaboradores formam a essência da Engetek, transformando desafios em soluções inovadoras e garantindo a excelência em cada projeto.
            É essa colaboração unida que impulsiona nosso sucesso e a qualidade que entregamos.</p>
        </div>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {memberGroups.map((group, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row">
                  {group.map((member, idx) => (
                    <div key={idx} className={getColumnclass(group.length)}>
                      <div className="card">
                        <img
                          src={member.image}
                          className="card-img-top"
                          alt={member.name}
                        />
                        <div className="carousel-caption d-none d-md-block">
                          <h3>{member.name}</h3>
                          <p>{member.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}