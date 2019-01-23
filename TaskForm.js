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
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 150,
        backgroundColor: '#F7F7F7'
    },
    input: {
        borderWidth: 1,
        borderColor: '#D7D7D7',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
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
    cancelButton: {
        backgroundColor: '#666',
    }
});

class TaskForm extends React.Component {
    state = {
        task: ''
    }
    static navigationOptions = {
        title: 'Add Todo',
    };

    onAddPressed() {
        const { onAdd } = this.props.navigation.state.params;
        onAdd(this.state.task);
    }

    onChange(text) {
        this.setState({
            task: text
        });
    }

    onCancel() {
        const { goBack } = this.props.navigation;
        goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={this.onChange.bind(this)}
                    style={styles.input}
                />
                <TouchableHighlight
                    onPress={this.onAddPressed.bind(this)}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.onCancel.bind(this)}
                    style={[styles.button, styles.cancelButton]}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

TaskForm.propTypes = { }

export default TaskForm;