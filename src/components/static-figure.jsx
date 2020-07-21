import React from 'react';
import { Image, Container} from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import SvgMainFigure2 from './svgs/main-figure-2';
import SvgSupplementaryFigure14 from './svgs/supplemental-figure-14';



const S3_BASE_URL = "https://encode3-companion.s3.us-east-2.amazonaws.com/";

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

export const StaticFigure = (props) => {
    const [ figureLoaded, setFigureLoaded ] = useState(false);
    const { id } = useParams();
    const figure = props.figures ? props.figures[id] : null
    console.log(figure)
    if(figure){console.log(S3_BASE_URL + figure.imgsrc)}
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
                    {figure.ftype === "svg" && figure.id != "main-figure-2" && <object id={figure.id} data={S3_BASE_URL + figure.imgsrc} className="ui massive image" type="image/svg+xml"/>}
                    {figure.ftype === "svg" && figure.id == "main-figure-2" && 
                        <Image style={{width: "100%"}}> <SvgMainFigure2/></Image> }
                    {figure.ftype === "png" && figure.id == "supplementary-figure-14" && 
                        <Image style={{width: "100%"}}> <SvgSupplementaryFigure14/></Image> }
                    {figure.ftype === "png" && figure.id != "supplementary-figure-14" && 
                        <Image style={{width: "100%"}}src={S3_BASE_URL + figure.imgsrc} onLoad={() => {console.log("loaded")
                            setFigureLoaded(true)}} ></Image>    
                    }
                    <hr/>
                        <h3 style={{fontWeight: "bold"}}> {figure.name.includes("Main") ? figure.name.replace("Main-", "").split("-").join(" "): figure.name.split("-").join(" ")} | {figure.title}</h3>
                    <div className="figure-description" style={{fontSize: "14pt", lineHeight: "10px"}}>
                    { ReactHtmlParser(htmlDecode(figure.caption)) }
                    </div>
                </div>
            }
        </Container>
    )
}
