import React from "react";
import CountUp from "react-countup";

export default function CountClient() {
  return (
    <>
      <section className="counter-section">
        <div className="counter-container">
          <div className="counter-item">
            <CountUp end={10} duration={3} suffix=" anos" />
            <p>DE MERCADO</p>
          </div>
          <div className="counter-item">
            <CountUp end={34500} duration={2.5} suffix=" m²" prefix="+ de " />
            <p>DE ÁREA CONSTRUÍDA</p>
          </div>
          <div className="counter-item">
            <CountUp end={3000} duration={2.5} suffix=" unidades" prefix="+ de " />
            <p>UNIDADES ENTREGUES</p>
          </div>
        </div>
      </section>
    </>
  )
}