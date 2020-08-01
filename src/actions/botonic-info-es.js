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
                <Text>Botonic es un framework open-source que te permite crear poderosas interfaces conversacionales.</Text>
                <Image src='https://botonic.io/images/botonic_react_logo-p-500.png'>
                    <Button url='https://botonic.io'>Visit Botonic</Button>
                </Image>

            </>
        )
    }
}
