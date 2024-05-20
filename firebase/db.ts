import {firebase} from '@react-native-firebase/database'

const db = firebase
  .app()
  .database(
    'https://day-task-ce1ee-default-rtdb.europe-west1.firebasedatabase.app/',
  )

export {db}
