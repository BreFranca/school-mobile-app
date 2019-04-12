import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'

export default class CardComunicado extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.infos}>
                        <Text style={styles.excerpt}>{this.props.excerpt}</Text>
                        <View style={styles.date}>
                            <Text style={styles.textDate}>{this.props.date}</Text>
                        </View>
                    </View>
                    <View style={styles.ratingButton}>
                        <View style={styles.rating}>
                            <Image
                                source={require('../../assets/img/star.png')}
                            />
                        </View>
                        <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
                            <Text style={styles.buttonText}>Ver detalhes</Text>
                            <Image
                                source={require('../../assets/img/arrow.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

// You can declare that a prop is a specific JS type. 
CardComunicado.propTypes = {
    date: PropTypes.string,
    excerpt: PropTypes.string,
    onPress: PropTypes.func,
}

// Default values for props
CardComunicado.defaultProps = {
    date: '15 ABR',
    excerpt: 'Resumo do comunicado',
    onPress: () => { },
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        borderRadius: 3,
        shadowColor: "#E7EAF0",
        shadowOffset: { width: 8, height: 15 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 1,
    },
    content: {
        paddingTop: 25,
        paddingRight: 12.5,
        paddingBottom: 11,
        paddingLeft: 12.5,
        backgroundColor: "#FFFFFF",
        borderRadius: 3,
    },
    infos: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 30
    },
    date: {
        width: 50,
        height: 50,
        borderRadius: 100,
        shadowColor: "#E7EAF0",
        shadowOffset: { width: 8, height: 15 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 1,
        backgroundColor: "#FFFFFF",
        color: "#FD7E77",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    ratingButton: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#E7EAF0",
        shadowOffset: { width: 8, height: 15 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 1,
        fontSize: 9,
        color: "#FD7E77",
        paddingTop: 10,
        paddingRight: 14,
        paddingBottom: 10,
        paddingLeft: 14,
    },
    buttonText: {
        marginRight: 8,
    },
    textDate: {
        color: "#FD7E77",
        fontSize: 12,
        fontWeight: "700",
        width: 30,
        textAlign: "center",
    },
    excerpt: {
        marginTop: 8,
        color: "#515C6F",
        fontSize: 11,
    }
})
