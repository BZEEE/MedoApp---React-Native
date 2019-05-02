

import React, { Component } from "react"
import { View, Text } from "react-native"
const styles = require("./LoginScreenStyleSheet")

class LoginScreen extends Component {
    render() {
        return(
            <View>
                <Text style={styles.welcome}>This is where you log in</Text>
            </View>
        )
    }
}