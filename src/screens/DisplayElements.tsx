import React from 'react'
import {FlatList, View, StyleSheet} from 'react-native'

//Redux Store
import {connect} from 'react-redux'
import {deleteElement} from './../actions/elements'

const mapStateToProps = (state) => {
    return {
        elements: state.elements.elementsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteElement: (id) => dispatch(deleteElement(id))
    }
}

//Components
import ListCard from '../components/ListCard'

//Screen
const DisplayElements = (props) => {
    return (
        <View style={styles.screen}>
            <FlatList style={styles.list}
            data={props.elements}
            keyExtractor={(obj) => obj.id}
            renderItem={(obj) => <ListCard title={obj.item.name} onDelete={() => props.deleteElement(obj.item.id)}/>}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 30
    },
    list: {
        width: '80%'
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (DisplayElements)