import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RenderRoutes from './routes/renderRoutes'
import Layout from './shared/Layout'
import { FullLoader } from './shared/components'

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<FullLoader />}>
        <Router>
          <RenderRoutes />
        </Router>
      </Suspense>
    </Layout>
  )
}

export default App
