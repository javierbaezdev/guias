import { useEffect, useRef, useState } from 'react'
import { IconTriangleInverted, IconTriangle } from '@tabler/icons-react'
import { NAVIGATION } from '@/shared/constants/general'

const Navigation = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState<string | null>(null)

  const onClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [onClose])

  const onNavigate = (rute: string) => {
    window.location.href = rute
  }

  return (
    <div ref={wrapperRef}>
      <ul>
        {NAVIGATION.map((nav) => (
          <div
            key={nav.key}
            className='rounded-md px-2 hover:bg-cod-gray-900/50'
          >
            <div
              className='flex items-center gap-2 hover:scale-110'
              onClick={() => {
                setIsOpen(!isOpen)
                setCurrentSection(nav.key)
              }}
            >
              <li className='relative cursor-pointer select-none  text-lg  '>
                {nav.label}
              </li>
              {isOpen && currentSection === nav.key && nav.isList ? (
                <IconTriangle stroke={2} width={12} />
              ) : (
                <IconTriangleInverted stroke={2} width={12} />
              )}
            </div>

            {nav.isList && isOpen && (
              <menu className='absolute right-2 top-12 animate-slide-in-top rounded-md bg-cod-gray-900 px-4 py-2'>
                <ul className='flex flex-col gap-1'>
                  {nav.options.map((op) => (
                    <li
                      className='cursor-pointer select-none rounded-md px-2 hover:scale-105 hover:bg-cod-gray-950'
                      key={op.key}
                      onClick={() => onNavigate(op.href)}
                    >
                      {op.label}
                    </li>
                  ))}
                </ul>
              </menu>
            )}
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Navigation
