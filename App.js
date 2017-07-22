import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
global.rootNav = {};

export default class App extends React.Component {  
 static navigationOptions = {
		header: null,
	}
 render(){
   return(
         
       <View>        
        <AppNav/> 
      </View>
       );
  
 }
}

class HomeScreen extends React.Component {
 static navigationOptions = {
    title: 'Welcome',
  };
 render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
 // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNav = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
},{
	initialRouteName: 'Home',
	headerMode: 'none',
});