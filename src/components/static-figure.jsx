import React from 'react';
import { Image } from 'semantic-ui-react';



export const StaticFigure = (props) => {
    console.log(props)
    const image = props.location.figureProps
    return(
        <Image src={props.location.figureProps.figure.imgsrc}></Image>
    )
}