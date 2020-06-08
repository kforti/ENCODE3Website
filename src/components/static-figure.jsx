import React, { useEffect } from 'react';
import { Image, Container, Grid } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom';
import { SVG } from '@svgdotjs/svg.js'
import { useState } from 'react';
import SvgMainFigure2 from './svgs/main-figure-2';
import SvgSupplementaryFigure14 from './svgs/supplemental-figure-14';



const S3_BASE_URL = "https://encode3-companion.s3.us-east-2.amazonaws.com/";

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

export const StaticFigure = (props) => {
    const [ svgLoaded, setSVGLoaded ] = useState(false);
    const { id } = useParams();
    const figure = props.figures ? props.figures[id] : null
    
    const svgRender = () => {
        if (figure && figure.id == "main-figure-2"){
            const rects = SVG(document.getElementById("svg86001"));
            console.log(rects)
            //console.log(rects.get(0))
        }
    }
    useEffect(() => {
        if(svgLoaded){
            svgRender()
        }
        return () => {
      
        }
    })

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
                    {figure.ftype === "svg" && !figure.id == "main-figure-2" && <object id={figure.id} onLoad={() => {setSVGLoaded(true)}} data={S3_BASE_URL + figure.imgsrc} className="ui massive image" type="image/svg+xml"/>}
                    {figure.ftype === "svg" && figure.id == "main-figure-2" && 
                        <Image style={{width: "100%"}} size='huge'> <SvgMainFigure2/></Image> }
                    {figure.ftype === "png" && figure.id == "supplementary-figure-14" && 
                        <Image style={{width: "100%"}} size='huge'> <SvgSupplementaryFigure14/></Image> }
                    {figure.ftype === "png" && !figure.id == "supplementary-figure-14" && 
                        <Image style={{width: "100%"}}src={S3_BASE_URL + figure.imgsrc} size='huge'></Image>    
                    }
                    <hr/>
                        <h3 style={{fontWeight: "bold"}}> {figure.name.includes("Main") ? figure.name.replace("Main-", "").split("-").join(" "): figure.name.split("-").join(" ")} | {figure.title}</h3>
                  { ReactHtmlParser(htmlDecode(figure.caption)) }
                </div>
            }
            <hr/>
            <br/>
        </Container>
    )
}
