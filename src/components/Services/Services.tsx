import { SetStateAction, useCallback, useMemo, useState } from 'react'
import { useQuery } from '@apollo/client'

import { getAuthedYukerInfo, getProvidedServices } from '../../api/queries'
import { formatCurrency } from '../../locale/formatters'
import './Services.css'

type Props = {
  onHideServicesList: () => SetStateAction<void>
}

export default function Services ({ onHideServicesList }: Props) {
  const [services, updateServices] = useState<Service[]>([])

  const { data: yukerInfo } = useQuery(getAuthedYukerInfo)
  const {
    error: providedServicesError,
    loading: providedServicesLoading
  } = useQuery(getProvidedServices, {
    onCompleted: data => {
      const { providedServices } = data
      const { services: includedServices } = yukerInfo.yuker
      const servicesList = providedServices.map(
        ({ id: serviceId, ...service }: Service) => ({
          ...service,
          isIncluded:
            includedServices.findIndex(
              ({ id }: { id: number }) => id === serviceId
            ) !== -1,
          id: serviceId
        })
      )

      updateServices(servicesList)
    }
  })

  const toggleServiceIncluded: (
    serviceId: Service['id']
  ) => SetStateAction<void> = useCallback(
    serviceId => {
      updateServices((services: Service[]) => {
        const servicesList = services.map(({ id, isIncluded, ...service }) => ({
          ...service,
          id,
          isIncluded: id === serviceId ? !isIncluded : isIncluded
        }))

        return servicesList
      })
    },
    [services]
  )

  const servicesList = useMemo(
    () => (
      <ul>
        {services.map(({ id, isIncluded, name, price }: Service) => (
          <li
            data-service-selected={isIncluded}
            key={id}
            onClick={() => toggleServiceIncluded(id)}
          >
            {name}{' '}
            <span className='services-included__price'>
              {formatCurrency({
                amount: price,
                currency: 'BRL',
                locale: 'pt-br'
              })}
            </span>
          </li>
        ))}
      </ul>
    ),
    [services, toggleServiceIncluded]
  )

  const totalPrice = useMemo(
    () => (
      <span className='services-included__total-selected'>
        Total Selecionado{' '}
        <span className='services-included__total-price'>
          {formatCurrency({
            amount: services
              .filter(({ isIncluded }) => isIncluded)
              .reduce((serviceSum, { price }) => (serviceSum += price), 0),
            currency: 'BRL',
            locale: 'pt-br'
          })}
        </span>
      </span>
    ),
    [services]
  )

  if (providedServicesError || providedServicesLoading) return null

  return (
    <section className='yuker-services'>
      <h2 className='typography--section-title decorated-title'>
        Serviços Contratados
      </h2>

      <div className='services-included'>
        {servicesList}
        {totalPrice}
      </div>

      <span className='cta pill' onClick={onHideServicesList}>
        Voltar
      </span>
    </section>
  )
}
