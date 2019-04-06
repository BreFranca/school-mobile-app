import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

export default class CardHome extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress} style={styles.container}>
				<Text style={styles.text}>{this.props.text}</Text>
			</TouchableOpacity>
		)
	}
}

// You can declare that a prop is a specific JS type. 
CardHome.propTypes = {
	text: PropTypes.string,
	content: PropTypes.array,
	onPress: PropTypes.func,
}

// Default values for props
CardHome.defaultProps = {
	text: 'Botão de testes',
	onPress: () => { },
	color: '#000000',
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffff00',
		width: '100%',
		height: 100,
		backgroundColor: "red",
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		textAlign: 'center',
	},
	text: {
		textAlign: 'center'
	}
})
