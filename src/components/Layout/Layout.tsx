import { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.module.scss'

interface ILayoutProps {
  children: ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </div>
  )
}
