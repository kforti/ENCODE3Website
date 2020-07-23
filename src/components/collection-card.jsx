import React, {useState} from 'react';

import { Card, Image, Divider } from 'react-bootstrap'
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
    
    return (
        <Card>
            
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
                    <Card.Img onLoad={onImageLoad} className="embed-responsive-item" style={{display: isLoaded ? "block" : "none", width: "100%",
                    height: "20vw",
                    objectFit: "cover" }} variant='top' src={S3_BASE_URL + figure.thumbnail_url} />
                </Link>
                <br/>
                <Card.Body>
                <Card.Title>{figure.name.includes("Main") ? figure.name.replace("Main-", "").split("-").join(" "): figure.name.split("-").join(" ")} | {figure.title}</Card.Title>
                <Card.Text>
                    {ReactHtmlParser(htmlDecode(figure.caption).substring(0, 200))}...
                </Card.Text>
                </Card.Body>
        </Card>
    )
}
