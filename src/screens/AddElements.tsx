import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

//Redux Store
import {connect} from 'react-redux'
import {addElement} from './../actions/elements'

const mapStateToProps = (state) => {
    return {
        elements: state.elements.elementsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addElement: (name: string) => dispatch(addElement(name))
    }
}

//Components

//Screen
const AddElements = (props: any) => {

    const [elementTitle, setElementTitle] = useState('')

    const onTitleChangeHandler = (text) => {
        setElementTitle(text)
    }
    
    return (
        <View style={styles.screen}>

            <Text style={styles.title}>Redux item list</Text>
            <TextInput style={styles.input} onChangeText={onTitleChangeHandler} placeholder='Enter your element' value={elementTitle} />

            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title='Submit' color='#ff0000' onPress={() => {props.addElement(elementTitle)}} /></View>
                <View style={styles.button}><Button title='Display' color='#f4511e' onPress={() => props.navigation.navigate('DisplayElements')}/></View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    title: {
        fontSize: 30,
        marginBottom: 20
    },
    input: {
        width: '80%',
        borderWidth: 4,
        borderRadius: 15,
        padding: 10,
        fontSize: 15,
        marginBottom: 40
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        width: '40%'
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (AddElements)