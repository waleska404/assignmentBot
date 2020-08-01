import React from 'react'
import { Text } from '@botonic/react'

export default class extends React.Component {
    render() {
        return (
            <>
                <Text>Great!</Text>
                <Text>
                    Hi {this.props.name}, welcome, this is a bot developed (using Botonic) by Paula Boyano as an asignment for Hubtype.
                    Si quieres saber más sobre Hubtype, escribe "hubtype".
                    Si quieres saber más sobre Paula Boyano, escribe "autora".
                    En cualquier momento puedes consultar los posibles comandos escribiendo "ayuda".
                </Text>
            </>
        )
    }
}