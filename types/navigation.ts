import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import type {FirebaseAuthTypes} from '@react-native-firebase/auth'

export namespace MainStack {
  export type Params = {
    Splash: undefined
    SignIn: undefined
    SignUp: undefined
    ForgotPassword: undefined
    Index: undefined
  }

  export type SplashScreenProps = NativeStackScreenProps<Params, 'Splash'>

  export type SignInScreenProps = NativeStackScreenProps<Params, 'SignIn'>

  export type SignUpScreenProps = NativeStackScreenProps<Params, 'SignUp'>

  export type ForgotPasswordScreenProps = NativeStackScreenProps<
    Params,
    'ForgotPassword'
  >
}

export namespace TabStack {
  export type Params = {
    Home: {
      user: FirebaseAuthTypes.User | null
    }
    AddTask: undefined
    Calendar: undefined
    Chat: undefined
    Notifications: undefined
  }

  export type HomeScreenProps = BottomTabScreenProps<Params, 'Home'>

  export type AddTaskScreen = BottomTabScreenProps<Params, 'AddTask'>

  export type CalendarScreen = BottomTabScreenProps<Params, 'Calendar'>

  export type ChatScreen = BottomTabScreenProps<Params, 'Chat'>

  export type NotificationsScreen = BottomTabScreenProps<
    Params,
    'Notifications'
  >
}
