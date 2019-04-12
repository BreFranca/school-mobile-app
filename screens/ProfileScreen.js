import React from 'react'
import { StyleSheet, Alert, Text, View } from 'react-native'
import TouchableTextBanner from '../components/banners/TouchableTextBanner'

export default class ProfileScreen extends React.Component {
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
                <TouchableTextBanner
                    title={'teste'} 
                    image={{uri:'http://s2.glbimg.com/yrN1DERqw8zxT9jsfTIpPPp3s4g=/s.glbimg.com/jo/g1/f/original/2015/01/04/1.jpg'}} 
                    message={'testando menasgem'}
                    onPress={this.handleClick}
                />
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
        marginRight: 5,
    },
})
