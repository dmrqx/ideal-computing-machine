import { useCallback, useState } from 'react'

import { Home, Services } from '../'

export default function App () {
  const [isServicesListVisible, setServicesListVisibility] = useState(false)
  const hideServicesList = useCallback(() => setServicesListVisibility(false), [])
  const showServicesList = useCallback(() => setServicesListVisibility(true), [])

  return (
    <>
      <header className="brand-header">
        <div className="max-width-container">
          <img src="https://www.yuca.live/logo.png" className="brand-header__logo" alt="Yuca Apartamentos e Coliving SP" />
          <aside className="user-avatar">
            <span className="user-avatar__image circle" data-user-initials="BS"></span>
            <span className="user-avatar__name">Bernardo</span>
          </aside>
        </div>
      </header>

      <main>
        <div className="max-width-container">
          {!isServicesListVisible ? <Home onShowServicesList={showServicesList} /> : <Services onHideServicesList={hideServicesList} />}
        </div>
      </main>
    </>
  )
}
