import React from 'react'
import {View, Image,Text} from 'react-native'

const CardImage = ({image, title = '', data}) => (
    <View>
        <Image source={image} style={{width: 50, height: 50}}/>
        <Text>{title}</Text>
    </View>
)

export default CardImage