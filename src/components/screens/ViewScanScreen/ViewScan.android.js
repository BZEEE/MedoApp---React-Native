import React, { Component } from "react"
import { View, Text } from "react-native"
import Canvas from "react-native-canvas"
const styles = require("./ViewScanStyleSheet")

class ViewScanScreen extends React.Component {

    static navigationOptions = {}

    handleCanvas = (canvas) => {
        const context = canvas.getContext('2d');
        context.fillStyle = "purple";
        context.fillRect(0, 0, 100, 100);
    }

    render() {
        return(
            <View>
                <Canvas ref={this.handleCanvas}/>
            </View>
        )
    }
}

export default ViewScanScreen;