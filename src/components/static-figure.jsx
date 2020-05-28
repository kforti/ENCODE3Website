import React from 'react';
import { Image, Container } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom' 
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers";


const S3_BASE_URL = "https://encode3-companion.s3.us-east-2.amazonaws.com/";

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

export const StaticFigure = (props) => {
    const { id } = useParams();
    console.log(props)
    const figure = props.figures ? props.figures[id] : null
    console.log(figure)
    return(
        <Container>
            {!figure && 
            <div >
            <div className="ui segment">
                <div className="ui active medium dimmer">
                    <div className="ui text medium loader">Loading</div>
                </div>
                <p></p>
            </div>
        </div>
            }
            {figure &&
                <div>
                    {figure.ftype === "svg" && <object data={S3_BASE_URL + figure.imgsrc} className="ui massive image" type="image/svg+xml"/>}
                    {figure.ftype === "png" && 
                    <GlassMagnifier
                    className="medium"
                    imageSrc={S3_BASE_URL + figure.imgsrc}
                    imageAlt={figure.name}
                    square={true}
                    magnifierSize="20%"
                    // mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
                    // touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
                  />
                    
                    // <Image src={S3_BASE_URL + figure.imgsrc} size='massive'></Image> 
                    }
                    <hr/>
                        <h3 style={{fontWeight: "bold"}}> {figure.name.includes("Main") ? figure.name.replace("Main-", "").split("-").join(" "): figure.name.split("-").join(" ")} | {figure.title}</h3>
                  { ReactHtmlParser(htmlDecode(figure.caption)) }
                </div>
            }
        </Container>
    )
}
// export const StaticFigure = (props) => {
//     console.log(props)
//     const figure = props.location.figureProps.figure

//     return(
//         <Container>
//             {props.location.figureProps.figure.ftype === "svg" && <object data={S3_BASE_URL + props.location.figureProps.figure.imgsrc} className="ui massive image" type="image/svg+xml"/>}
//             {props.location.figureProps.figure.ftype === "png" && <Image src={S3_BASE_URL + props.location.figureProps.figure.imgsrc} size='massive'></Image> }
//             <hr/>
//                 <h3 style={{fontWeight: "bold"}}> {figure.name.includes("Main") ? figure.name.replace("Main-", "").split("-").join(" "): figure.name.split("-").join(" ")} | {figure.title}</h3>
//             <p> { ReactHtmlParser(htmlDecode(figure.caption)) } </p>
            
//         </Container>
//     )
// }