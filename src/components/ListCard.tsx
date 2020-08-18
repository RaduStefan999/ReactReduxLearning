import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

import {FontAwesome} from '@expo/vector-icons'

const ListCard = (props) => {
    return (
        <View style={styles.listCard}>
            <Text style={styles.title}>{props.title}</Text>
            <TouchableOpacity style={styles.button} onPress={() => props.onDelete()}>
                <FontAwesome name='trash-o' size={24} color='white' />
            </TouchableOpacity>
        </View>
    )
}

const styles =  StyleSheet.create({
    listCard: {
        width: '100%',
        padding: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f4511e',
        borderRadius: 15,
        marginBottom: 10
    },
    title: {
        width: '80%',
        color: 'white',
        fontSize: 16
    },
    button: {
        width: '15%',
        justifyContent: 'center'
    }
})

export default ListCard