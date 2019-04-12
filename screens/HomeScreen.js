import React from 'react'
import { StyleSheet, Alert, Text, View } from 'react-native'
import CardComunicado from '../components/CardComunicado'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: 'Testando estado'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {

    }
    handleClick = () => {
        console.log('dsadsdsdas')
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        );

    }
    render() {
        return (
            <View style={styles.container}>
                <CardComunicado />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5
    },
    card: {
        width: '33.33%',
        padding: 10
    }
})
