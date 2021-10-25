import { PropsWithChildren } from 'react'

export default function SiteHeader ({ children }: PropsWithChildren<{}>) {
  return (
    <header className='brand-header'>
      <div className='max-width-container'>
        <img
          src='https://www.yuca.live/logo.png'
          alt='Yuca Apartamentos e Coliving SP'
          className='brand-header__logo'
        />
        {children}
      </div>
    </header>
  )
}
