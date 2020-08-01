import React from 'react'
import { Text } from '@botonic/react'

export default class extends React.Component {
    render() {
        return (
            <>
                <Text>Great!</Text>
                <Text>
                    Hi {this.props.name}, welcome, this is a bot developed (using Botonic) by Paula Boyano as an asignment for Hubtype.
                    If you want to know what you can do here, type "help".
                </Text>
            </>
        )
    }
}