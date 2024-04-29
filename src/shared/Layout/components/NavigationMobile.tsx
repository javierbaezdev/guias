import { useState } from 'react'
import {
  IconTriangleInverted,
  IconTriangle,
  IconX,
  IconCategory2 as Menu,
} from '@tabler/icons-react'
import logo from '@/assets/logo.webp'
import logoText from '@/assets/logoText.svg'
import { NAVIGATION } from '@/shared/constants/general'
import { Image } from '@/shared/components'

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenSection, setIsOpenSection] = useState(false)
  const [currentSection, setCurrentSection] = useState<string | null>(null)

  const onToggle = () => {
    const newState = !isOpen

    if (!newState) {
      setIsOpenSection(false)
      setCurrentSection(null)
    }

    setIsOpen(newState)
  }

  const selectSection = (currentKey: string) => {
    setIsOpenSection(!isOpenSection)
    setCurrentSection(currentKey)
  }

  const onNavigate = (rute: string) => {
    window.location.href = rute
  }

  return (
    <div>
      <div>
        {!isOpen && (
          <Menu stroke={2} onClick={onToggle} className='animate-rotate-360' />
        )}
      </div>
      {isOpen && (
        <div className='p- fixed left-0 top-0 z-50 m-0 h-dvh w-screen animate-slide-in-top bg-cod-gray-950'>
          <div className='pointer-events-none absolute -bottom-24 -left-64 -z-10 opacity-20'>
            <Image src={logo} width='500px' className='' />
          </div>
          <div className='pointer-events-none absolute bottom-4 right-2 -z-10 opacity-20'>
            <Image src={logoText} width='150px' />
          </div>
          <div className='flex w-full justify-end pr-2 pt-4'>
            <IconX
              stroke={2}
              onClick={onToggle}
              className='animate-rotate-360'
            />
          </div>
          <div className='mt-6'>
            {NAVIGATION.map((nav) => (
              <div key={nav.key} className='flex flex-col gap-2'>
                <header
                  className='flex items-center justify-center gap-2'
                  onClick={() => selectSection(nav.key)}
                >
                  <h2 className='text-2xl'>{nav.label}</h2>
                  {isOpenSection && currentSection === nav.key && nav.isList ? (
                    <IconTriangle stroke={2} width={18} />
                  ) : (
                    <IconTriangleInverted stroke={2} width={18} />
                  )}
                </header>
                {isOpenSection && currentSection === nav.key && nav.isList && (
                  <div className='flex animate-fade-in flex-col  gap-2 rounded-md bg-cod-gray-900 p-2'>
                    {nav.options.map((op) => (
                      <h3
                        key={op.key}
                        onClick={() => onNavigate(op.href)}
                        className='flex items-center rounded-md bg-cod-gray-950/50 p-2'
                      >
                        {op.label}
                      </h3>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default NavigationMobile
