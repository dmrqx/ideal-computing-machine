import { useCallback, useState } from 'react'

import { Home, Services, SiteHeader, YukerAvatar } from '..'

export default function AppRoot () {
  const [isServicesListVisible, setServicesListVisibility] = useState<boolean>(
    false
  )

  const hideServicesList = useCallback(
    () => setServicesListVisibility(false),
    []
  )
  const showServicesList = useCallback(
    () => setServicesListVisibility(true),
    []
  )

  return (
    <>
      <SiteHeader>
        <YukerAvatar />
      </SiteHeader>

      <main>
        <div className='max-width-container'>
          {!isServicesListVisible ? (
            <Home onShowServicesList={showServicesList} />
          ) : (
            <Services onHideServicesList={hideServicesList} />
          )}
        </div>
      </main>
    </>
  )
}
