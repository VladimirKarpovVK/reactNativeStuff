import React ,{Component} from 'react';
import {TouchableWithoutFeedback,Alert, Text,TextInput, View, StyleSheet,  Animated } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
 
const Paragraph=({children})=>( 
  <View style={{border:'1px solid #fff',padding:15,borderBottomColor:'#e4e4e4', lineHeight:17}}>
  {children}
  </View>
);


export default class App extends Component {

//   componentWillMount(){
// this.animatedValue=new Animated.Value(0);
// this.animatedSize=new Animated.Value(1);
//   }
//   componentDidMount(){
//     Animated.timing(this.animatedValue,{
//       toValue:1,
//       duration:1000
//     }).start();
//     Animated.timing(this.animatedSize,{
//       toValue:3,
//       duration:2000
//     }).start()
//   }

constructor(props){
  super(props);
  this.onPressIn=this.onPressIn.bind(this);
  this.onPressOut=this.onPressOut.bind(this);
 }
componentWillMount() {
  this.animatedValue= new Animated.Value(1);

}
onPressOut(){
  Animated.spring(this.animatedValue,{
    toValue:1
  }).start();
}
 onPressIn(){
Animated.spring(this.animatedValue,{
  toValue:1.5

}).start();
}


  render() {
     const animatedStyle={
       transform:[{scale: this.animatedValue}]
     };
    return <View  style={{    padding:'35%',flex:1,backgroundColor:'#fff'}}>
      <TouchableWithoutFeedback 
      onPressOut={this.onPressOut}
      onPressIn={
        this.onPressIn }>
      <Animated.View style={[styles.container,animatedStyle]}>
      
      </Animated.View>
      </TouchableWithoutFeedback>
      </View> }
}
const styles=StyleSheet.create({
  container:{height:100 , width:100 , backgroundColor:'#4A76A8',
  borderRadius:'50%',
  border:'15px solid #08D94C'
  }
  
})
 