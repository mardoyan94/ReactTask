import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { styles } from './styles'

export const Loading = ({ visible }) => {

    return visible ?
        (<View
            style={styles.container}>
            <Text style={styles.text}>
                Loading...
            </Text>
        </View>) : null

}