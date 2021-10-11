import { SetStateAction } from 'react'

import './Home.css'

type Props = {
  onShowServicesList: () => SetStateAction<void>
}

export default function Home ({ onShowServicesList }: Props) {
  return (
    <>
      <h1 className="typography--page-title decorated-title">Bem vindo, Bernardo</h1>

      <section className="yuker-home">
        <h2 className="typography--section-dialogue">Atualmente você está morando em:</h2>

        <div className="card">
          <div className="card__image">
            <img src="https://source.unsplash.com/3wylDrjxH-E" alt="" aria-hidden="true" />
          </div>

          <div className="card__content">
            <div className="home-info">
              <div className="home-info__location">
                <b>Maceió 41</b>
                <span>Quarto A</span>
              </div>
              <div className="home-info__amenities">
                <ul>
                  <li data-amenity="subway">
                    <span className="icon circle"></span>Paulista <span className="body-text--dim">40m</span>
                  </li>
                </ul>
              </div>
              <div className="home-info__price">
                <b>R$ 2.500</b>
              </div>
            </div>
          </div>
        </div>
        <span className="cta pill" onClick={onShowServicesList}>Contratar Serviços</span>
      </section>
    </>
  )
}
