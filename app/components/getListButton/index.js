import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Alert,
    BackHandler
} from 'react-native'
import { styles } from './styles'
import { SET_LIST, SET_LIST_LOADING } from '../../constants/actionsTypes'
import { api } from '../../networking'


export class GetListButton extends Component {

    autoUpdateInterval = null

    constructor(props) {
        super(props)
        this.state = {
            timer: 60
        }
        this.props.onRef(this)
    }

    componentDidMount() {
        const { navigation } = this.props

        this.unsubscribe = navigation.addListener('focus', () => {
            this.getList()
        });
    }

    componentWillUnmount() {
        this.clearInterval()
        this.unsubscribe()
    }

    createInterval = () => {
        if (!this.autoUpdateInterval) {
            this.autoUpdateInterval = setInterval(() => {
                let newTimer = --this.state.timer
                if (newTimer == 0) {
                    this.getList()
                    newTimer = 60
                }
                this.setState({ timer: newTimer })
            }, 1000);
        }
    }

    clearInterval = () => {
        if (this.autoUpdateInterval) {
            clearInterval(this.autoUpdateInterval)
            this.autoUpdateInterval = null
        }
    }

    getList = async () => {
        this.props.dispatch({ type: SET_LIST_LOADING, value: true })
        try {
            const data = await api.getList();
            this.state.timer = 60
            this.props.dispatch({ type: SET_LIST, value: data })
            this.createInterval()
        }
        catch {
            this.props.dispatch({ type: SET_LIST_LOADING, value: false })
            Alert.alert(
                "Oops!",
                "Something went wrong.",
                [
                    {
                        text: "Close app",
                        onPress: BackHandler.exitApp,
                        style: "cancel"
                    },
                    { text: "Try again", onPress: this.getList }
                ]
            );
        }
    }

    refreshList = () => {
        this.setState({ timer: 60 })
        this.clearInterval()
        this.getList()
    }

    render() {
        console.log('timer');
        const { timer } = this.state;
        const disabledRefreshing = timer > 35
        return (
            <TouchableWithoutFeedback
                disabled={disabledRefreshing}
                onPress={this.refreshList}>
                <View style={[styles.button, { opacity: disabledRefreshing ? 0.7 : 1 }]}>
                    <Text style={styles.buttonText}>
                        Get list again {timer}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}