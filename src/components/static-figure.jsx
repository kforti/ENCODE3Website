import React from 'react';
import { Image, Container, Grid } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser';
import { useParams } from 'react-router-dom' 


const S3_BASE_URL = "https://encode3-companion.s3.us-east-2.amazonaws.com/";

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

export const StaticFigure = (props) => {
    const { id } = useParams();
    const figure = props.figures ? props.figures[id] : null
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
                        <Image style={{width: "100%"}}src={S3_BASE_URL + figure.imgsrc} size='huge'></Image>    
                    }
                    <hr/>
                        <h3 style={{fontWeight: "bold"}}> {figure.name.includes("Main") ? figure.name.replace("Main-", "").split("-").join(" "): figure.name.split("-").join(" ")} | {figure.title}</h3>
                  { ReactHtmlParser(htmlDecode(figure.caption)) }
                </div>
            }
            <br/>
        </Container>
    )
}
