import React, { Component } from 'react'
import {
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import MainStack from './routes/mainStack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default class Myapp extends Component {

    render() {
        return (
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior="padding"
                        enabled={Platform.OS === 'ios'}>
                        <MainStack />
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </SafeAreaProvider>
        )
    }

}