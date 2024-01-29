import './Main.css'
import { Outlet } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { ReactNode } from 'react'

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <main className='main'>
        {children}
        <Outlet />
      </main>
    </Layout>
  )
}

export default Main
