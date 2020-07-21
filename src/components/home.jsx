import React from 'react'

export const HomePage = () => {
    return (
        <div className="row">
            <div className="col-xs-12 home-text" style={{fontFamily: 'Helvetica', fontSize: "12pt", }}>	
            <div style={{textAlign: "center", paddingBottom: "5rem", paddingTop: "1.5rem"}}>
            <h1><a id="_snuew5zg9q92"></a><em>Expanded Encyclopedias of DNA Elements in the Human and Mouse Genomes</em></h1>
            <hr/>
            </div>
            <h3><a id="_xp7bbwazkft"></a>Overview</h3>
            <p >The ENCODE Project aims to map all functional elements of the human and mouse genomes. Progress toward this goal has involved over ten thousand epigenomic experiments utilizing a wide array of assays. The most recently completed phase of the ENCODE Project, Phase III, saw a sizeable expansion in the breadth of cell types assayed and the depth of assays performed for each cell type (see Table 1, <em>Tables</em> tab). ENCODE experiments must satisfy the data production guidelines (see the <em>Data production guidelines</em> link, <em>Useful Links</em> section below); raw data produced by the experiments are available at the ENCODE portal (see the <em>Experiment matrix</em> link, <em>Useful Links</em> section below).</p>
            <p>The results of these experiments have been combined to form a catalog of epigenomic annotations called the ENCODE Encyclopedia (see the <em>Encyclopedia information</em> link, <em>Useful Links</em> section below). The Encyclopedia includes a ground level, which contains annotations for individual experiments produced by the ENCODE uniform processing pipeline (see the <em>Uniform Pipeline</em> link, <em>Useful Links</em> section below), and an integrated level, in which ground-level annotations across multiple experiments have been combined to produce higher-level annotations.</p>
            <p><em>Expanded Encyclopedias of DNA Elements in the Human and Mouse Genomes </em>describes the expansion of data production during ENCODE Phase III and introduces the Registry of candidate Cis-Regulatory Elements (cCREs), the core of the Encyclopedia’s integrated level. The cCREs are a collection of DNase hypersensitivity sites supported by the histone modifications H3K4me3 and H3K27ac or CTCF binding. They are divided into groups, including cCREs with promoter-like signatures, enhancer-like signatures, and cCREs bound by CTCF, on the basis of these epigenomic marks (see Figure 3, <em>Figures</em> tab).</p>
            <p>Searching and visualization of cCREs within the Registry is enabled by SCREEN (Search Candidate Regulatory Elements by ENCODE), a web-based tool accessible at <a href="http://screen.encodeproject.org/">http://screen.encodeproject.org/</a>. SCREEN also presents gene expression data associated with the cCREs and the intersection between SNPs from GWAS and the cCREs, and facilitates visualization of both integrated and ground-level annotations using the UCSC genome browser. Together, these features represent a powerful tool for the generation of biological hypotheses using ENCODE data.</p>
            <h3><a id="_fnzwvdzdnbmr"></a>How to use this site</h3>
            <p>This companion site provides useful links to information related to the ENCODE Encyclopedia and the cCREs. In addition, the site provides rich, interactive versions of published figures, supplementary figures, and tables from the Phase III paper. </p>
            </div>
            <div>
            <h3><a id="_7e0utp65ifj4"></a>Useful Links</h3>
            <h4><a id="_lhecz88vblu7"></a><em>SCREEN and Registry links</em></h4>
            <p>SCREEN homepage: <a href="http://screen.encodeproject.org/">http://screen.encodeproject.org</a></p>
            <p>SCREEN GWAS: <a href="https://screen.encodeproject.org/gwasApp/?assembly=GRCh38">https://screen.encodeproject.org/gwasApp/?assembly=GRCh38</a></p>
            <p>Registry GitHub:<a href="https://github.com/weng-lab/ENCODE-cCREs">https://github.com/weng-lab/ENCODE-cCREs</a></p>
            <h4><a id="_nqu1mhvy5qd6"></a><em>ENCODE Portal</em></h4>
            <p>Portal homepage: <a href="http://www.encodeproject.org/">http://www.encodeproject.org/</a></p>
            <p>Encyclopedia information: <a href="https://www.encodeproject.org/data/annotations/">https://www.encodeproject.org/data/annotations/</a></p>
            <p>Data production guidelines: <a href="https://www.encodeproject.org/about/experiment-guidelines/#guideline">https://www.encodeproject.org/about/experiment-guidelines/#guideline</a></p>
            <p>Uniform pipeline: <a href="https://www.encodeproject.org/pipelines/">https://www.encodeproject.org/pipelines/</a></p>
            <p>Experiment matrix: <a href="https://www.encodeproject.org/matrix/?type=Experiment">https://www.encodeproject.org/matrix/?type=Experiment</a></p>
            <p>Quality metrics: <a href="https://www.encodeproject.org/data-standards/,%20https://www.encodeproject.org/antibodies/">https://www.encodeproject.org/data-standards/, https://www.encodeproject.org/antibodies/</a></p>
            <p>GitHub: <a href="https://github.com/ENCODE-DCC">https://github.com/ENCODE-DCC</a></p>
            <h4><a id="_b05hh1wj2he7"></a></h4>
            <h4><a id="_nec0ezxag92k"></a><em>Other links</em></h4>
            <p>Factorbook: <a href="http://www.factorbook.org/">http://www.factorbook.org</a></p>
            <p>RNA binding protein immunostaining: <a href="http://rnabiology.ircm.qc.ca/RBPImage/">http://rnabiology.ircm.qc.ca/RBPImage/</a></p>

            </div>
        </div>
    )
}
