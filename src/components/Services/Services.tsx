import { SetStateAction } from 'react'

import './Services.css'

type Props = {
  onHideServicesList: () => SetStateAction<void>
}

export default function Services ({ onHideServicesList }: Props) {
  return (
    <section className="yuker-services">
      <h2 className="typography--section-title decorated-title">Serviços Contratados</h2>

      <div className="services-included">
        <ul>
          <li data-service-selected="true">Limpeza Semanal <span className="services-included__price">R$520</span></li>
          <li>Lavanderia <span className="services-included__price">R$140</span></li>
          <li>Manutenção <span className="services-included__price">R$220</span></li>
          <li>Dog walker <span className="services-included__price">R$390</span></li>
        </ul>

        <span className="services-included__total-selected">Total Selecionado <span className="services-included__total-price">R$520</span></span>
      </div>

      <span className="cta pill" onClick={onHideServicesList}>Voltar</span>
    </section>
  )
}

