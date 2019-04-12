import React, {Component} from 'react'
import { View } from 'react-native'
import CardImage from '../components/cards/CardImage'

class NewsContainer extends Component{
    
    state = { 

    }

    componentDidMount(){
        this.setState({data: 'teste'})
    }

    render(){
        return(
            <View> 
                <CardImage 
                    title={this.state.data} 
                    image={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
            </View>
        )
    }
}

export default NewsContainer