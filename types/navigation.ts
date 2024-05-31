import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs'

export namespace MainStack {
  export type Params = {
    Splash: undefined
    SignIn: undefined
    SignUp: undefined
    ForgotPassword: undefined
    MainTabs: undefined
  }

  export type SplashScreenProps = NativeStackScreenProps<Params, 'Splash'>

  export type SignInScreenProps = NativeStackScreenProps<Params, 'SignIn'>

  export type SignUpScreenProps = NativeStackScreenProps<Params, 'SignUp'>

  export type ForgotPasswordScreenProps = NativeStackScreenProps<
    Params,
    'ForgotPassword'
  >
}

export namespace MainTab {
  export type Params = {
    HomeStack: undefined
    AddTask: undefined
    Calendar: undefined
    Chat: undefined
    Notifications: undefined
  }

  export type HomeStackProps = BottomTabScreenProps<Params, 'HomeStack'>

  export type AddTaskScreenProps = BottomTabScreenProps<Params, 'AddTask'>

  export type CalendarScreenProps = BottomTabScreenProps<Params, 'Calendar'>

  export type ChatScreenProps = BottomTabScreenProps<Params, 'Chat'>

  export type NotificationsScreenProps = BottomTabScreenProps<
    Params,
    'Notifications'
  >
}

export namespace HomeStack {
  export type Params = {
    Home: undefined
    Profile: undefined
  }

  export type HomeScreenProps = NativeStackScreenProps<Params, 'Home'>

  export type ProfileScreenProps = NativeStackScreenProps<Params, 'Profile'>
}
