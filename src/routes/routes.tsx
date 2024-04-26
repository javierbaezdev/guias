import { Navigate } from 'react-router-dom'
import { routesSwitch } from '@/modules/Switch/router'
import { PATHS_SWITCH } from '@/modules/Switch/paths'
import { NotFound } from '@/shared/components'

/* import { NotFound } from '@/shared/pages' */

const generalsRoutes = [
  {
    path: '/',
    key: 'INDEX',
    exact: true,
    element: () => <Navigate to={`/${PATHS_SWITCH.UPDATE.CLI}`} />,
  },
  {
    path: '*',
    key: 'ALL',
    element: () => <Navigate to='404' />,
  },
  {
    path: '404',
    key: '404',
    element: () => <NotFound />,
  },
]

const routes = [...generalsRoutes, ...routesSwitch]

export default routes
