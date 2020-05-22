import React, {useState} from 'react';

import { Card, Image, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import extended_data_figure_3 from '../figures/main/Extended-Data-Figure-3.png';
import ReactHtmlParser from 'react-html-parser'; 
import { useEffect } from 'react';


const S3_BASE_URL = "https://encode3-companion.s3.us-east-2.amazonaws.com/";

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

export const CollectionCard= ({figure}) => {
    const [isLoaded, setIsLoaded] = useState(false);
   
    const onImageLoad = () => {
        setIsLoaded(true)
    }
    const collection = figure.id.includes("supplementary") ? "supplemental-figures" : "main-extended-figures";
    console.log(figure)
    return (
        <Card>
            <Card.Content>
            
                <Link to={{
                    pathname: `/${collection}/`+figure.name,
                    // figureProps:{
                    //     figure: figure
                    //     }
                    }}  className="nav-item nav-link">
                    <div style={{display: !isLoaded ? "block" : "none"}}>
                        <div className="ui segment">
                            <div className="ui active medium dimmer">
                                <div className="ui text medium loader">Loading</div>
                            </div>
                            <p></p>
                        </div>
                    </div>
                    <Image onLoad={onImageLoad} style={{display: isLoaded ? "block" : "none"}} size='big' src={S3_BASE_URL + figure.thumbnail_url} wrapped fluid={false} centered/>
                </Link>
                <Divider/>
                <Card.Header>{figure.name.includes("Main") ? figure.name.replace("Main-", "").split("-").join(" "): figure.name.split("-").join(" ")} | {figure.title}</Card.Header>
                <Card.Description>
                    {ReactHtmlParser(htmlDecode(figure.caption).substring(0, 200))}...
                </Card.Description>
                </Card.Content>
        </Card>
    )
}
