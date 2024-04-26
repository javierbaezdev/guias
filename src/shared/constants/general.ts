import { PATHS_SWITCH } from '@/modules/Switch/paths'

export const FAKE_DELAY_ROUTER = 1000

export const NAVIGATION = [
  {
    key: 'SWITCH',
    label: 'Switch',
    href: null,
    icon: null,
    isList: true,
    options: [
      {
        key: 'UPDATE_NS',
        label: 'Actualizar',
        href: `/${PATHS_SWITCH.UPDATE.CLI}`,
        icon: null,
      },
      {
        key: 'ADD_ROOMS_NS',
        label: 'Cargar juegos',
        href: `/${PATHS_SWITCH.ADD_ROOMS.CLI}`,
        icon: null,
      },
    ],
  },
]
