import React from 'react'
import { Text, View } from 'react-native'

import CalcButton from '../components/CalcButton';
import { styles } from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

const CalculadoraScreen = () => {

    const { btnAdd, 
            btnDivide, 
            btnDelete, 
            btnMultiply, 
            btnSubstract, 
            buildNumber, 
            clear, 
            calculate, 
            positiveNegative, 
            number, 
            previousNumber } = useCalculator();    

    return (
        <View style={ styles.calculatorContainer }>

            {
                previousNumber !== '0' &&
                <Text style={ styles.smallResult }>{ previousNumber }</Text>
            }

            <Text style={ styles.result } numberOfLines={ 1 } adjustsFontSizeToFit>{ number }</Text>

            <View style={ styles.row }>

                {/* Boton */}
                <CalcButton text="AC" color="#9b9b9b" action={ clear } />
                <CalcButton text="+/-" color="#9b9b9b" action={ positiveNegative } />
                <CalcButton text="del" color="#9b9b9b" action={ btnDelete } />
                <CalcButton text="/" color="#ff9427" action={ btnDivide } />

            </View>

            <View style={ styles.row }>

                {/* Boton */}
                <CalcButton text="7" action={ buildNumber } />
                <CalcButton text="8" action={ buildNumber } />
                <CalcButton text="9" action={ buildNumber } />
                <CalcButton text="X" color="#ff9427" action={ btnMultiply } />

            </View>

            <View style={ styles.row }>

                {/* Boton */}
                <CalcButton text="4" action={ buildNumber } />
                <CalcButton text="5" action={ buildNumber } />
                <CalcButton text="6" action={ buildNumber } />
                <CalcButton text="-" color="#ff9427" action={ btnSubstract } />

            </View>

            <View style={ styles.row }>

                {/* Boton */}
                <CalcButton text="1" action={ buildNumber } />
                <CalcButton text="2" action={ buildNumber } />
                <CalcButton text="3" action={ buildNumber } />
                <CalcButton text="+" color="#ff9427" action={ btnAdd } />

            </View>

            <View style={ styles.row }>

                {/* Boton */}
                <CalcButton text="0" wide action={ buildNumber } />
                <CalcButton text="." action={ buildNumber } />
                <CalcButton text="=" color="#ff9427" action={ calculate } />

            </View>

        </View>
    )
}

export default CalculadoraScreen

