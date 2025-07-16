import React from "react";
import '../styles/global.css'

export default function WhatsappButton() {
  return (
    <>
      <section>
        <div>
          <a href="https://wa.me/5569999999999"
            class="whatsapp-float"
            target="_blank"
            title="Fale conosco no WhatsApp">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp"/>
          </a>
        </div>
      </section>
    </>
  )
}