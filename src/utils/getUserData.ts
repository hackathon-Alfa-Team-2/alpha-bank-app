export interface UserData {
  id: number
  first_name: string
  second_name: string
  last_name: string
  position: string
  grade: string
  role: string
  photo: string | null
}

let userData: UserData = {
  role: '',
  id: 0,
  first_name: '',
  second_name: '',
  last_name: '',
  position: '',
  grade: '',
  photo: null,
}

const userDataString = localStorage.getItem('userData')

export const getUserData = () => {
  if (userDataString) {
    try {
      userData = JSON.parse(userDataString)
    } catch (error) {
      console.error('Error parsing userData:', error)
    }
  }

  return userData
}
