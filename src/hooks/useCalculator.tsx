import { useRef, useState } from "react";

enum Operators {
    add, substract, multiply, divide
}

export const useCalculator = () => {
    
    const [previousNumber, setPreviousNumber] = useState('0');
    const [number, setNumber] = useState('0');

    const lastOperator = useRef<Operators>();

    const clear = () => {
        setNumber('0');
        setPreviousNumber('0');
        lastOperator.current = undefined;
    }

    const buildNumber = (n: string) => {      

        // No aceptar dos puntos
        if ( number.includes('.') && n === '.' ) return;

        if ( number.startsWith('0') || number.startsWith('-0') ) {

            // Punto decimal
            if ( n === '.' ) {
                setNumber( number + n );

            // Evaluar si es otro cero y hay un punto 
            } else if ( n === '0' && number.includes('.') ) {
                setNumber( number + n );

            // Evaluar si es diferente de 0 y no tiene punto
            } else if ( n !== '0' && !number.includes('.') ) {
                setNumber( n );

            // Evitar 0000.0
            } else if ( n == '0' && !number.includes('.') ) {
                setNumber( number );

            } else {
                setNumber( number + n );   
            }

        } else {
            setNumber( number + n );   
        }

    }

    const positiveNegative = () => {

        if ( number.includes('-') ) {
            setNumber( number.replace('-', '') )
        } else {
            setNumber( '-' + number )
        }

    }

    const btnDelete = () => {

        let negative = '';
        let tempNumber = number;

        if ( number.includes('-') ) {
            negative = '-';
            tempNumber = number.replace('-', '');
        }

        if ( tempNumber.length > 1 ) {
            setNumber( negative + tempNumber.slice(0, -1) )
        } else {
            setNumber( '0' )
        }
        
    }

    const changeNumberToPrevious = () => {

        if ( number.endsWith('.') ) {
            setPreviousNumber( number.slice(0, -1) );
        } else {
            setPreviousNumber( number );
        }
        setNumber( '0' );

    }

    const btnDivide = () => {
        changeNumberToPrevious();
        lastOperator.current = Operators.divide;
    }

    const btnMultiply = () => {
        changeNumberToPrevious();
        lastOperator.current = Operators.multiply;
    }

    const btnSubstract = () => {
        changeNumberToPrevious();
        lastOperator.current = Operators.substract;
    }

    const btnAdd = () => {
        changeNumberToPrevious();
        lastOperator.current = Operators.add;
    }

    const calculate = () => {
        
        const num1 = Number( previousNumber );
        const num2 = Number( number );

        switch (lastOperator.current) {
            case Operators.add:
                setNumber( `${ num1 + num2 }` );
                break;

            case Operators.substract:
                setNumber( `${ num1 - num2 }` );
                break;

            case Operators.multiply:
                setNumber( `${ num1 * num2 }` );
                break;

            case Operators.divide:
                setNumber( `${ num1 / num2 }` );
                break;
        }

        lastOperator.current = undefined;
        setPreviousNumber('0')

    }

    return {
        clear,
        buildNumber,
        positiveNegative,
        btnDelete,
        btnDivide,
        btnMultiply,
        btnSubstract,
        btnAdd,
        calculate,
        number,
        previousNumber
    }


}
