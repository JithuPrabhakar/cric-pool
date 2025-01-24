import { Outlet } from 'react-router-dom'
import Layout from './Layout'

const LayoutRoute = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export default LayoutRoute
