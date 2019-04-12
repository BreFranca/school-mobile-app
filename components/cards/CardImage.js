import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, TouchableOpacity, ImageBackground, Text } from 'react-native'

export default class CardImage extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <ImageBackground
                    source={require('../../assets/img/image-comunicado.jpg')}
                    style={styles.image}
                >
                </ImageBackground>
                <View style={styles.content}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.excerpt}>{this.props.excerpt}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

// You can declare that a prop is a specific JS type. 
CardImage.propTypes = {
    title: PropTypes.string,
    excerpt: PropTypes.string,
    onPress: PropTypes.func,
}

// Default values for props
CardImage.defaultProps = {
    title: 'Título do comunicado',
    excerpt: 'Resumo do comunicado',
    onPress: () => { },
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        borderRadius: 5,
        shadowColor: "#E7EAF0",
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 1,
    },
    image: {
        width: "100%",
        height: 158,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
    },
    content: {
        padding: 16,
        backgroundColor: "#FFFFFF",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    title: {
        color: "#FD7E77",
        fontSize: 11,
        fontWeight: "500",
    },
    excerpt: {
        marginTop: 8,
        color: "#515C6F",
        fontSize: 11,
    }
})
