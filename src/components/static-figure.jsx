import React from 'react';
import { Image, Container } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser'; 


const S3_BASE_URL = "https://encode3-companion.s3.us-east-2.amazonaws.com/";

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }
export const StaticFigure = (props) => {
    console.log(props)
    const figure = props.location.figureProps.figure

    return(
        <Container>
            {props.location.figureProps.figure.ftype === "svg" && <object data={S3_BASE_URL + props.location.figureProps.figure.imgsrc} className="ui massive image" type="image/svg+xml"/>}
            {props.location.figureProps.figure.ftype === "png" && <Image src={S3_BASE_URL + props.location.figureProps.figure.imgsrc} size='massive'></Image> }
            <hr/>
                <h3 style={{fontWeight: "bold"}}> {figure.name.includes("Main") ? figure.name.replace("Main-", "").split("-").join(" "): figure.name.split("-").join(" ")} | {figure.title}</h3>
            <p> { ReactHtmlParser(htmlDecode(figure.caption)) } </p>
            
        </Container>
    )
}