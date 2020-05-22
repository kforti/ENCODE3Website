import React from 'react';

import { Container, Col, Row, Image } from 'react-bootstrap'; 

export const ToolsPage = () => {

    return(
        <Container textAlign="center">
            <Row md={4} style={{margin: "15px"}}>
                <Col></Col>
                <Col xs={6} style={{backgroundColor: "#d0e0f1", textAlign: "center"}}>
                    <h2 style={{padding: "10px"}}>Variant Annotation Tools</h2>
                </Col>
                <Col></Col>
            </Row>
            
            <p>
                Over the past decade, Genome Wide Association Studies (GWAS) have provided insights into how genetic variations contribute to human diseases.
                However, over 80% of the variants reported by GWAS are in noncoding regions of the genome and the mechanism of how they contribute to disease onset is unknown. 
                By integrating data from the ENCODE project and other public sources, RegulomeDB and HaploReg are two resources developed by ENCODE labs to aid the research community in annotating GWAS variants.
                FunSeq is another ENCODE resource for annotating both germline and somatic variants, particularly in the noncoding regions of cancer genomes.
            </p>
            <br/>
            <Row md={4}>
                <Col>
                    <a href="http://www.regulomedb.org/" target="_blank">
                        <Image src="https://static.wixstatic.com/media/39b3df_9464040dd8d645e69071395e1d39cd27~mv2.png/v1/fill/w_295,h_79,al_c,q_85,usm_0.66_1.00_0.01/39b3df_9464040dd8d645e69071395e1d39cd27~mv2.webp"></Image>
                    </a>
                </Col>
                <Col></Col>
                <Col>
                    <a href="http://archive.broadinstitute.org/mammals/haploreg/haploreg.php" target="_blank">
                        <Image src="https://static.wixstatic.com/media/39b3df_bb52abe72dba43c494a244401a26cdc3~mv2.png/v1/fill/w_245,h_51,al_c,q_85,usm_0.66_1.00_0.01/39b3df_bb52abe72dba43c494a244401a26cdc3~mv2.webp"></Image>
                    </a>
                </Col>
            </Row>
            <br/>
            <Row md={4}>
                <Col></Col>
                <Col>
                    <a href="http://funseq2.gersteinlab.org/" target="_blank">
                        <Image src="https://static.wixstatic.com/media/39b3df_a26dd107948142c1a0b4d085af4f99db~mv2.png/v1/fill/w_248,h_80,al_c,q_85,usm_0.66_1.00_0.01/39b3df_a26dd107948142c1a0b4d085af4f99db~mv2.webp"></Image>
                    </a>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}