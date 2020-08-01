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
                <Text>The author of this bot is Paula Boyano, a computer engineering student at UPC.
                    She is passionate about technology, you can see some of her projects on her github page:
                </Text>
                <Image
                    src='https://avatars3.githubusercontent.com/u/26300667?s=400&u=f513fa8e8734e632477744526c60c5bd9651798e&v=4'>
                </Image>
                <Button url='https://github.com/waleska404'>Visit Paula's Github</Button>

            </>
        )
    }
}
