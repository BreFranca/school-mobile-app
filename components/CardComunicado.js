import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, TouchableOpacity, ImageBackground, Text } from 'react-native'

class CardComunicado extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <ImageBackground
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                    style={styles.image}
                >
                </ImageBackground>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.excerpt}>{this.props.excerpt}</Text>
            </TouchableOpacity>
        )
    }
}

// You can declare that a prop is a specific JS type. 
CardComunicado.propTypes = {
    text: PropTypes.string,
    content: PropTypes.array,
    onPress: PropTypes.func,
}

// Default values for props
CardComunicado.defaultProps = {
    text: 'Botão de testes',
    onPress: () => { },
    color: '#000000',
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: 158,
    },
    title: {
        color: '#FD7E77',
        fontSize: 11,
    },
    excerpt: {
        color: '#515C6F',
        fontSize: 11,
        fontWeight: "500",
    }
})


export default CardComunicado