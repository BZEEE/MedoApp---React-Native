// code will mostly be re-usable, except for platform specific components
// For this case check the operating system for certain cases
// to determine what styles and components to apply. use the 'Platform' module

const styles = StyleSheet.create({
    viewStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

module.exports = styles