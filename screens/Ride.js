import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const image = { uri: "https://i.pinimg.com/564x/7e/9d/48/7e9d481bceca4661f125d3f34f01f637.jpg" };


export default class RideScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
         <ImageBackground source={image} resizeMode="cover" style={styles.imageback} >
           <View style={styles.containertitulos}>
        <Text style={styles.text}> Jonathan Leco </Text>
        <Text style={styles.text}>Proyecto TabNavigator</Text>
        <Image source={require('../assets/appIcon.png')}  style={styles.image1}/>
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageback:{
flex:1,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    
    backgroundColor: "lightcyan"
  },

containertitulos:{
alignItems:"center",
marginTop:'70%',

},

  text: {
    color: "#637213",
    fontSize: 30,
    
  },

image1:{
  width:200,
  height:200,
}


});
