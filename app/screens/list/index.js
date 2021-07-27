import React, { Component } from 'react'
import {
    View,
    FlatList,
    Text,
    TouchableWithoutFeedback
} from 'react-native'
import { connect } from 'react-redux'
import { Loading, GetListButton } from '../../components'
import { styles } from './styles'

class ListClass extends Component {

    constructor(props) {
        super(props)

    }

    emptyText = () => {
        return (
            <Text style={styles.emptyText}>
                List is empty
            </Text>
        )
    }

    goToDetails = (item) => {
        this.buttonRef.clearInterval()
        this.props.navigation.navigate('Detail', { item })
    }

    renderItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => this.goToDetails(item)}
            >
                <View style={styles.itemContainer}>
                    <Text style={styles.itemId}>
                        ID: {item.id}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={styles.itemTitle}>
                        Title: {item.title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        const { list, listLoading } = this.props
        return (
            <View style={styles.container}>
                <GetListButton
                    onRef={(ref) => this.buttonRef = ref}
                    navigation={this.props.navigation}
                    dispatch={this.props.dispatch}
                />
                <FlatList
                    ListEmptyComponent={listLoading ? null : this.emptyText}
                    data={list}
                    renderItem={this.renderItem}
                    keyExtractor={(_, i) => i.toString()}
                    contentContainerStyle={styles.scrollInner}
                />
                <Loading visible={listLoading} />
            </View>
        )
    }
}

const mapStateToProps = (store) => ({
    list: store.mainData.list,
    listLoading: store.mainData.listLoading
});
export const List = connect(mapStateToProps)(ListClass);