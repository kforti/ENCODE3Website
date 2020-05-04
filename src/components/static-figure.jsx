import React from 'react';
import { Image, Container } from 'semantic-ui-react';



export const StaticFigure = (props) => {
    console.log(props)
    const figure = props.location.figureProps.figure

    return(
        <Container>
            <Image src={props.location.figureProps.figure.imgsrc}></Image>
            <h3> {figure.name}</h3>
            <p> { figure.caption } </p>
            
        </Container>
    )
}