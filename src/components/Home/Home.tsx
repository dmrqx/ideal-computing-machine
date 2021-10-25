import { SetStateAction, useMemo } from 'react'
import { useQuery } from '@apollo/client'

import { getAuthedYukerInfo } from '../../api/queries'
import { formatCurrency } from '../../locale/formatters'
import './Home.css'

type Props = {
  onShowServicesList: () => SetStateAction<void>
}

export default function Home ({ onShowServicesList }: Props) {
  const { data, error, loading } = useQuery(getAuthedYukerInfo)

  const {
    firstName,
    apartment: { image, name: street, number, price, room, subwayStation }
  } = useMemo(() => {
    if (data?.yuker) {
      const { apartment } = data.yuker
      const { firstName } = data.yuker.user

      return {
        apartment,
        firstName
      }
    }

    return {
      firstName: '',
      apartment: {}
    }
  }, [data])

  const apartmentPhoto = useMemo(() => {
    return (
      <div className='card__image'>
        {!!image && <img src={image} alt='' aria-hidden='true' />}
      </div>
    )
  }, [image])

  const formattedPrice = useMemo(
    () => formatCurrency({ amount: price, currency: 'BRL', locale: 'pt-br' }),
    [price]
  )

  if (error || loading) return null

  return (
    <>
      <h1 className='typography--page-title decorated-title'>
        Bem vindo, {firstName}
      </h1>

      <section className='yuker-home'>
        <h2 className='typography--section-dialogue'>
          Atualmente você está morando em:
        </h2>

        <div className='card'>
          {apartmentPhoto}

          <div className='card__content'>
            <div className='home-info'>
              <div className='home-info__location'>
                <b>{`${street} ${number}`}</b>
                <span>Quarto {room}</span>
              </div>
              <div className='home-info__amenities'>
                <ul>
                  <li data-amenity='subway'>
                    <span className='icon circle'></span>
                    {subwayStation.name}{' '}
                    <span className='body-text--dim'>
                      {subwayStation.distance}
                    </span>
                  </li>
                </ul>
              </div>
              <div className='home-info__price'>
                <b>{formattedPrice}</b>
              </div>
            </div>
          </div>
        </div>
        <span className='cta pill' onClick={onShowServicesList}>
          Contratar Serviços
        </span>
      </section>
    </>
  )
}
