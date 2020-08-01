import React from 'react'
import { Text } from '@botonic/react'

export default class extends React.Component {
    render() {
        return (
            <>
            <Text>¡Estupendo!</Text>
            <Text>
                Hola {this.props.name}, bienvenido a este bot desarrollado por Paula Boyano (utilizando Botonic) como tarea de selección para Hubtype.
                Si quieres saber más sobre Hubtype, escribe "hubtype".
                Si quieres saber más sobre Botonic, escribe "botonic".
                Si quieres saber más sobre Paula Boyano, escribe "autora".
                En cualquier momento puedes consultar los posibles comandos escribiendo "ayuda".
            </Text>
            </>
        )
    }
}