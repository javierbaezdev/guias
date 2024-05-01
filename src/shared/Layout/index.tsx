import { useState } from 'react'
import {
  BubbleBackground,
  Logo,
  Navigation,
  NavigationMobile,
} from './components'

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  const [isOpenNav, setIsOpenNav] = useState(false)
  return (
    <div className='min-w-screen m-0 h-dvh overflow-auto bg-black/80 p-0'>
      <div className='flex h-14 flex-row items-center justify-between overflow-hidden rounded-bl-md rounded-br-md border-b-2 border-carissma-500 bg-cod-gray-900 bg-opacity-15 p-2'>
        <Logo />
        <div className='hidden md:block'>
          <Navigation
            setIsOpenNav={(isOpen) => setIsOpenNav(isOpen as boolean)}
          />
        </div>
        <div className='md:hidden'>
          <NavigationMobile />
        </div>
      </div>
      {isOpenNav && (
        <div className='fixed z-[100] hidden h-full w-full bg-black opacity-60 md:flex' />
      )}
      <main className='ml-auto mr-auto mt-6 max-w-[48rem] p-2'>
        <BubbleBackground />
        {children}
      </main>
      <footer className='ml-auto mr-auto mt-auto flex max-w-[48rem] justify-end border-t-2 border-dashed border-carissma-600 px-2 py-4'>
        <h3 className='text-xs text-cod-gray-400'>
          Diseñado y desarrollado por Javier Báez.
        </h3>
      </footer>
    </div>
  )
}

export default Layout
