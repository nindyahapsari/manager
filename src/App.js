import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import '@firebase/auth';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAwOWv30W--svXD_QoClOp97AJ8zFkkjRg",
            authDomain: "react-native-manager-app-74843.firebaseapp.com",
            databaseURL: "https://react-native-manager-app-74843.firebaseio.com",
            projectId: "react-native-manager-app-74843",
            storageBucket: "react-native-manager-app-74843.appspot.com",
            messagingSenderId: "589515723412"
            };

    firebase.initializeApp(config);
        
}

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;