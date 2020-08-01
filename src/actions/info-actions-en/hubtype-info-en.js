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
                <Text>At Hubtype they create conversational messaging experiences,
                    they help brands to establish personal relationships with their customers in a scalable way.
                </Text>
                <Image
                    src='https://pbs.twimg.com/profile_images/1126442648762503169/DpZrnLy5_400x400.png'>
                </Image>
                <Button url='https://www.hubtype.com/es/'>Visit Hubtype's web</Button>

            </>
        )
    }
}
