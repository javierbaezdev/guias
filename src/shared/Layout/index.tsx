import { Logo, Navigation, NavigationMobile } from './components'

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <div className='min-w-screen m-0 h-dvh overflow-auto bg-black/80 p-0'>
      <div className='flex h-14 flex-row items-center justify-between overflow-hidden rounded-bl-md rounded-br-md bg-gradient-to-r from-cod-gray-900/90 to-cod-gray-950 p-2'>
        <Logo />
        <div className='hidden md:block'>
          <Navigation />
        </div>
        <div className='md:hidden'>
          <NavigationMobile />
        </div>
      </div>
      <main className='ml-auto mr-auto mt-6 max-w-[48rem] p-2'>{children}</main>
      <footer className='ml-auto mr-auto mt-auto flex max-w-[48rem] justify-end border-t-2 border-dashed border-cod-gray-400 px-2 py-4'>
        <h3 className='text-xs text-cod-gray-400'>
          Diseñado y desarrollado por Javier Báez.
        </h3>
      </footer>
    </div>
  )
}

export default Layout
