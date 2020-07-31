import React from 'react'
import { Text, Button } from '@botonic/react'

export default class extends React.Component {
    render() {
        return (
            <>
                <Text>Welcome! / Bienvenido!</Text>
                <Text>
                    Please choose the language you want to use. / Porfavor, escoge el idioma que prefieras utilizar.
                    <Button payload='english'>English</Button>
                    <Button payload='spanish'>Español</Button>
                </Text>
            </>
        )
    }
}