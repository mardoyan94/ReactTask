import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'
import { styles } from './styles'

export class Detail extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        const { item } = this.props.route.params
        return <View
            style={styles.container}>
                <Text style={styles.infoText}>
                ID: {item.id}
                </Text>
                <Text style={styles.infoText}>
                Completed: {item.completed}
                </Text>
                <Text style={styles.infoText}>
                Title: {item.title}
                </Text>
                <Text style={styles.infoText}>
                User ID: {item.userId}
                </Text>
        </View>
    }
}