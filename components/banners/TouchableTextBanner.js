import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native'
import UserIcon from '../icons/UserIcon'
import { LinearGradient } from 'expo';

const TouchableTextBanner = (props) => (
    <TouchableOpacity onPress={props.onPress} style={style.container}>                    
        <LinearGradient     
            // mudar as cores para corretas   
            colors={['#FD7E77', '#FD7111']}
            start={[0.0, 0.5]} 
            end={[1.0, 0.5]} 
            locations={[0.0, 1.0]}
            style={style.content}>
                <UserIcon image={props.image} text={props.title}/>
                <View style={style.textContainer}>
                    {props.title && <Text style={style.title}>{props.title}</Text>}
                    {props.message && <Text style={style.messageText}>{props.message}</Text>}
                </View>
        </LinearGradient>
    </TouchableOpacity>
)


TouchableTextBanner.propTypes = {
    image: PropTypes.object,
    message: PropTypes.string,
    onPress: PropTypes.func,
    title: PropTypes.string,
}

TouchableTextBanner.defaultProps = {
    image: null,
    message: 'Seu Filho é muito bagunceiro',
    onPress: () => { },
    title: 'Professor Raimundo',
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        height: 100,
        marginBottom: 20,
    },
    content: {
        borderRadius: 3,
        paddingVertical: 13,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
    },
    textContainer: {
        marginLeft: 10,
    },
    title: {
        fontSize: 11,
        color: '#FFFFFF',
        fontWeight: '500',
    },
    messageText: {
        fontSize: 11,
        color: '#FFFFFF'
    } 
})
export default TouchableTextBanner