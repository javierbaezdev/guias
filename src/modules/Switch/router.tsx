import { lazy } from 'react'
import { PATHS_SWITCH } from './paths'
import { FAKE_DELAY_ROUTER } from '@/shared/constants/general'

const Update = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_ROUTER))
  return import('./pages/Update')
})

const AddRooms = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, FAKE_DELAY_ROUTER))
  return import('./pages/AddRooms')
})

export const routesSwitch = [
  {
    path: `/${PATHS_SWITCH.UPDATE.CLI}`,
    key: PATHS_SWITCH.UPDATE.KEY,
    exact: true,
    element: () => <Update />,
  },
  {
    path: `/${PATHS_SWITCH.ADD_ROOMS.CLI}`,
    key: PATHS_SWITCH.ADD_ROOMS.KEY,
    exact: true,
    element: () => <AddRooms />,
  },
]
