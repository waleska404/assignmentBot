import React from 'react'
import {
    Text,
    Button,
    Image
} from '@botonic/react'
export default class extends React.Component {
    render() {
        return (
            <>
                <Text>Botonic is an easy to learn, open-source framework that lets you create powerful conversational interfaces.</Text>
                <Image src='https://botonic.io/images/botonic_react_logo-p-500.png'> </Image>
                <Button url='https://botonic.io'>Visit Botonic's web</Button>

            </>
        )
    }
}
