import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, View, Image, Text} from 'react-native'

const UserIcon = ({image, title}) => (
    <View style={style.radiusImage}>
        {
            image 
            ? <Image source={image}/> 
            : <Text>{title.substring(0,1)}</Text>
        }
    </View>
)


UserIcon.propTypes = {
    title: PropTypes.string,
    image: PropTypes.object
}

UserIcon.defaultProps = {
    title: 'Professor Raimundo',
    image: null,
}


const style = StyleSheet.create({
    radiusImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#FFFFFF'
    }
})

export default UserIcon