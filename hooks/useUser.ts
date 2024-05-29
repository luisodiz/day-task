import {useState, useEffect} from 'react'
import auth from '@react-native-firebase/auth'

import type {FirebaseAuthTypes} from '@react-native-firebase/auth'

export const useUser = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

  useEffect(() => {
    const currentUser = auth().currentUser
    if (currentUser) {
      setUser(currentUser)
    }
  }, [])

  return [user]
}
