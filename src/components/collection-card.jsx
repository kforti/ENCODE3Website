import React from 'react';

import { Card, Image, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import extended_data_figure_3 from '../figures/main/Extended-Data-Figure-3.png';



export const CollectionCard= ({figure}) => {
    return (
        <Card>
            <Card.Content>
                <Link to={{
                    pathname: "/figure/"+figure.id,
                    figureProps:{
                        figure: figure
                        }
                    }}  className="nav-item nav-link">
                    <Image size='medium' src={figure.imgsrc} wrapped fluid={false} centered/>
                </Link>
                <Divider/>
                <Card.Header>{figure.name}</Card.Header>
                <Card.Description>
                    
                </Card.Description>
                </Card.Content>
        </Card>
    )
}