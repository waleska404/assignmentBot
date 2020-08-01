import React from 'react'
import { Text } from '@botonic/react'

export default class extends React.Component {
    render() {
        return (
            <>
                <Text>
                    To interact with this bot you can:
                    Type "company" if you want more information about Hubtype.
                    Type "framework" if you want more information about Botonic.
                    Type "author" if you want to know more about the author of this bot.
                    Type "help" if you want to know what you can do here.
                </Text>
            </>
        )
    }
}