import './App.css'
import MainRoutes from '../Main/MainRoutes'
//import { useGetUserDataQuery } from '../Auth/Auth.api'
//import { useEffect } from 'react'
//import { useGetUserDataQuery } from '../Auth/Auth.api'

function App() {
  //const { data: userData } = useGetUserDataQuery()
  //console.log('userData', userData)

  //const x =
  //  localStorage.getItem('userData') !== null &&
  //  localStorage.getItem('userData')

  //const n: string = x === typeof 'string' && x

  //console.log(JSON.parse(n))
  //const userDataString = localStorage.getItem('userData')
  //// eslint-disable-next-line @typescript-eslint/no-explicit-any
  //let userData: any

  //if (userDataString !== null) {
  //  userData = JSON.parse(userDataString)
  //  // Ваш код, использующий userData
  //}
  //const hasRole = userData?.role === 'supervisor'
  //console.log('APP', hasRole, userData?.role)

  //useEffect(() => {
  //  if (userData) {
  //    localStorage.setItem('userData', JSON.stringify(userData))
  //  }
  //}, [userData])

  return <MainRoutes />
}

export default App
