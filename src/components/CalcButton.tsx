import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    text: string;
    action: (n: string) => void;
    color?: string;
    wide?: boolean;
}

const CalcButton = ({ text, action, color = '#2d2d2d', wide = false }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => action( text ) }
        >
            <View style={{ 
                ...styles.button,
                backgroundColor: color,
                width: wide ? 180 : 80
            }}>
                <Text style={{
                    ...styles.buttonText,
                    color: ( color === '#9b9b9b' ) ? 'black' : 'white',
                }}>
                    { text }
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: '600'
    },
})

export default CalcButton