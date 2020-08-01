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
                <Text>La autora de este bot es Paula Boyano, una estudiante de ingeniería informática en la UPC.
                    Le apasiona la tecnología, puedes ver algunos de sus proyectos en su github:
                </Text>
                <Image
                    src='https://avatars3.githubusercontent.com/u/26300667?s=400&u=f513fa8e8734e632477744526c60c5bd9651798e&v=4'>
                </Image>
                <Button url='https://github.com/waleska404'>Visitar el github de Paula</Button>

            </>
        )
    }
}
