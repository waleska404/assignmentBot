import React from 'react'
import { Text } from '@botonic/react'

export default class extends React.Component {
    render() {
        return (
            <>
                <Text>¡Estupendo!</Text>
                <Text>
                    Hola {this.props.name}, bienvenido a este bot desarrollado por Paula Boyano (utilizando Botonic) como tarea de selección para Hubtype.
                    Si quieres saber qué puedes hacer aquí, escribe "ayuda".
                </Text>
            </>
        )
    }
}