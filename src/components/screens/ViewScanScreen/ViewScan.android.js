import React, { Component } from "react"
import { View, Text } from "react-native"
const styles = require("./ViewScanStyleSheet")

class ViewScanScreen extends React.Component {

    static navigationOptions = {}

    render() {
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.welcome}>This is where you log in</Text>
            </View>
        )
    }
}

export default ViewScanScreen;