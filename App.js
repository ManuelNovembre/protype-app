import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {Alert, Button, Text, TextInput, View, StyleSheet} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    onLogin() {
        const {username, password} = this.state;

        Alert.alert('Credentials', `${username} + ${password}`);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({username})}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={this.onLogin.bind(this)}/>

                <Text>What is your dream?</Text>
                <Text>A. Meet Laboon again</Text>
                <Text>B. Become pirate king</Text>
                <Text>C. Become the best swordsman</Text>
                <Text>D. Discover the world</Text>
                <StatusBar style="auto"/>

            </View>);
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
