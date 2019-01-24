import React from 'react';
import PropTypes from 'prop-types'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        paddingTop: 150,
        flex: 1,
        backgroundColor: '#25D366'
    },
    input: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#DCF8C6',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        padding: 15,
        borderRadius: 3
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FAFAFA'
    },
    button: {
        height: 45,
        alignSelf: 'stretch',
        backgroundColor: '#05A5D1',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="email" />
                <TextInput style={styles.input} placeholder="password" secureTextEntry={true} />
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

Login.propTypes = { }

export default Login;