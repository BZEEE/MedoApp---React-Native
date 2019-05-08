

import React from "react"
import styles from "./styles.js"
import {
    createStackNavigator, 
    createAppContainer } from "react-navigation"
import { LoginScreen } from "./components/screens"

const MainNavigator = createStackNavigator({
    Login: {screen:LoginScreen}
})

const App = createAppContainer(MainNavigator)

// const app = props => {
//     return <LoginScreen />
// }

export default App;