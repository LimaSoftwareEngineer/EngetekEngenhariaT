import React, { useState } from "react";
import SendMessange from "../components/Buttons";
import AddressInformation from "./AddressInformation";

export default function FormContact() {
  const [selectedProjectType, setSelectedProjectType] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  const handleProjectTypeChange = (event) => {
    const value = event.target.value;
    setSelectedProjectType(value);
    setIsEditable(value === "Outro"); // Habilita edição apenas se "Outro" for selecionado
  };

  const handleInputChange = (event) => {
    if (isEditable) {
      const value = event.target.value;
      setSelectedProjectType(value);
      // Força o <select> a manter "Outro" como selecionado quando o input é editado
      if (value && value !== "Outro") {
        setIsEditable(true); // Mantém editável se o usuário digitar algo diferente
      }
    }
  };

  return (
    <>
      <form action="#" method="POST" className="needs-validation" noValidate>
        <section id="contact-page-content">
          <div className="container">
            <h2 className="section-title initial-hidden fade-in-scale-up delay-05">Como Podemos Ajudar?</h2>
            <div className="row gx-4">
              <div className="col-lg-7">
                <div className="contact-card contact-form-card initial-hidden slide-in-right delay-2">
                  <h3>Envie sua Mensagem</h3>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome Completo" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>

                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="Email" aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">@gmail.com</span>
                  </div>

                  <div className="input-group mb-3">
                    <select
                      className="form-select"
                      value={isEditable ? "Outro" : selectedProjectType}
                      onChange={handleProjectTypeChange}
                      aria-label="Tipos de Projeto"
                    >
                      <option value="">Selecione um Tipo de Projeto</option>
                      <option value="Prédio Comercial">Prédio Comercial</option>
                      <option value="Galpão Industrial">Galpão Industrial</option>
                      <option value="Reforma Estrutural">Reforma Estrutural</option>
                      <option value="Outro">Outro</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      value={selectedProjectType}
                      onChange={handleInputChange}
                      readOnly={!isEditable}
                      placeholder={isEditable ? "Digite o tipo de projeto" : "Tipo de Projeto Selecionado"}
                      aria-label="Tipo de Projeto"
                    />
                  </div>

                  <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">Mensagem</span>
                    <textarea className="form-control" aria-label="Mensagem" placeholder="Descreva seu projeto ou necessidade..."></textarea>
                  </div>

                  <SendMessange />
                </div>
              </div>
              <AddressInformation />
            </div>
          </div>
        </section>
      </form>
    </>
  );
}