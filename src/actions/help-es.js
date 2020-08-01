import React from 'react'
import { Text } from '@botonic/react'

export default class extends React.Component {
    render() {
        return (
            <>
                <Text>
                    En este bot puedes:
                    Escribir "hubtype" si quieres más información sobre Hubtype.
                    Escribir "botonic" si quieres más información sobre Botonic.
                    Escribir "autora" si quieres más información sobre quién ha hecho este bot.
                    Escribir "ayuda" si quieres saber las acciones disponibles.
                </Text>
            </>
        )
    }
}