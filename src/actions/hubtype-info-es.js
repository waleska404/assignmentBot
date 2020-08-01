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
                <Text>En Hubtype crean experiencias de mensajería conversacional,
                    ayudan a las marcas a establecer relaciones personales con sus clientes de forma escalable.
                </Text>
                <Image src='https://pbs.twimg.com/profile_images/1126442648762503169/DpZrnLy5_400x400.png'>
                    <Button url='https://www.hubtype.com/es/'>Visit Hubtype</Button>
                </Image>

            </>
        )
    }
}
