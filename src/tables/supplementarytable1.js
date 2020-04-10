const cols = [
    {
	"text": "ENCODE experiment ID",
    "dataField": "accession",
    sort: true
    },
    {
	"text": "Cell Type",
    "dataField": "ct",
    sort: true
    },
    {
	"text": "RBP target",
    "dataField": "target",
    sort: true
    }
];

const data = [
    {accession: "ENCSR000SSH", ct: "K562", target: "SLTM"},
    {accession: "ENCSR006OEQ", ct: "K562", target: "FAM120A"},
    {accession: "ENCSR018RVZ", ct: "HepG2", target: "NCBP2"},
    {accession: "ENCSR018ZUE", ct: "HepG2", target: "FKBP4"},
    {accession: "ENCSR022BVV", ct: "K562", target: "LSM11"},
    {accession: "ENCSR023UHL", ct: "HepG2", target: "FASTKD2"},
    {accession: "ENCSR041NUV", ct: "HepG2", target: "EIF3D"},
    {accession: "ENCSR057DWB", ct: "K562", target: "TIA1"},
    {accession: "ENCSR059CWF", ct: "K562", target: "SBDS"},
    {accession: "ENCSR061EVO", ct: "HepG2", target: "SND1"},
    {accession: "ENCSR062NNB", ct: "K562", target: "IGF2BP2"},
    {accession: "ENCSR081JYH", ct: "K562", target: "NSUN2"},
    {accession: "ENCSR097NEE", ct: "HepG2", target: "PPIG"},
    {accession: "ENCSR121GQH", ct: "K562", target: "SERBP1"},
    {accession: "ENCSR121NVA", ct: "HepG2", target: "PRPF8"},
    {accession: "ENCSR128VXC", ct: "K562", target: "SND1"},
    {accession: "ENCSR133QEA", ct: "K562", target: "SF3B1"},
    {accession: "ENCSR135VMS", ct: "HepG2", target: "LSM11"},
    {accession: "ENCSR141OIM", ct: "HepG2", target: "DDX6"},
    {accession: "ENCSR154HRN", ct: "K562", target: "HNRNPA1"},
    {accession: "ENCSR196INN", ct: "K562", target: "RBM15"},
    {accession: "ENCSR197INS", ct: "K562", target: "PPIL4"},
    {accession: "ENCSR200DKE", ct: "K562", target: "MTPAP"},
    {accession: "ENCSR202BFN", ct: "HepG2", target: "U2AF2"},
    {accession: "ENCSR206RXT", ct: "K562", target: "AKAP8L"},
    {accession: "ENCSR214BZA", ct: "HepG2", target: "DDX59"},
    {accession: "ENCSR218NAB", ct: "K562", target: "TNRC6A"},
    {accession: "ENCSR224QWC", ct: "K562", target: "FXR2"},
    {accession: "ENCSR238CLX", ct: "K562", target: "GEMIN5"},
    {accession: "ENCSR240MVJ", ct: "HepG2", target: "HNRNPU"},
    {accession: "ENCSR258QKO", ct: "K562", target: "XRCC6"},
    {accession: "ENCSR265ZIS", ct: "HepG2", target: "GTF2F1"},
    {accession: "ENCSR267OLV", ct: "K562", target: "SF3B4"},
    {accession: "ENCSR267UCX", ct: "HepG2", target: "HNRNPM"},
    {accession: "ENCSR268ETU", ct: "K562", target: "HNRNPK"},
    {accession: "ENCSR269AJF", ct: "K562", target: "RPS11"},
    {accession: "ENCSR277DEO", ct: "HepG2", target: "NKRF"},
    {accession: "ENCSR279UJF", ct: "HepG2", target: "SF3B4"},
    {accession: "ENCSR291XPT", ct: "K562", target: "PUS1"},
    {accession: "ENCSR295OKT", ct: "K562", target: "RBM22"},
    {accession: "ENCSR301TFY", ct: "HepG2", target: "DKC1"},
    {accession: "ENCSR301UQM", ct: "K562", target: "GNL3"},
    {accession: "ENCSR303OQD", ct: "K562", target: "METAP2"},
    {accession: "ENCSR307WAE", ct: "HepG2", target: "RPS5"},
    {accession: "ENCSR307YIW", ct: "K562", target: "EIF4G2"},
    {accession: "ENCSR314UMJ", ct: "HepG2", target: "TRA2A"},
    {accession: "ENCSR316SZJ", ct: "K562", target: "RPS5"},
    {accession: "ENCSR328LLU", ct: "HepG2", target: "U2AF1"},
    {accession: "ENCSR331MIC", ct: "HepG2", target: "SF3A3"},
    {accession: "ENCSR331VNX", ct: "K562", target: "FMR1"},
    {accession: "ENCSR334QFR", ct: "HepG2", target: "AUH"},
    {accession: "ENCSR339FUY", ct: "HepG2", target: "PCBP2"},
    {accession: "ENCSR349KMG", ct: "K562", target: "UCHL5"},
    {accession: "ENCSR351PVI", ct: "HepG2", target: "SLTM"},
    {accession: "ENCSR365NVO", ct: "K562", target: "TRA2A"},
    {accession: "ENCSR366YOG", ct: "K562", target: "QKI"},
    {accession: "ENCSR373ODC", ct: "HepG2", target: "SMNDC1"},
    {accession: "ENCSR384KAN", ct: "HepG2", target: "PTBP1"},
    {accession: "ENCSR384MWO", ct: "HepG2", target: "CSTF2"},
    {accession: "ENCSR406OOZ", ct: "HepG2", target: "SUB1"},
    {accession: "ENCSR412NOW", ct: "K562", target: "HNRNPM"},
    {accession: "ENCSR432XUP", ct: "K562", target: "SRSF1"},
    {accession: "ENCSR438GZQ", ct: "K562", target: "KHSRP"},
    {accession: "ENCSR438KWZ", ct: "K562", target: "ILF3"},
    {accession: "ENCSR456ASB", ct: "K562", target: "UPF1"},
    {accession: "ENCSR456JJQ", ct: "HepG2", target: "RBM22"},
    {accession: "ENCSR456KXI", ct: "K562", target: "LARP7"},
    {accession: "ENCSR468FSW", ct: "K562", target: "SRSF7"},
    {accession: "ENCSR483NOP", ct: "K562", target: "SLBP"},
    {accession: "ENCSR484LTQ", ct: "K562", target: "NCBP2"},
    {accession: "ENCSR485QCG", ct: "HepG2", target: "BCCIP"},
    {accession: "ENCSR486YGP", ct: "HepG2", target: "FUBP3"},
    {accession: "ENCSR489RJI", ct: "K562", target: "RBM27"},
    {accession: "ENCSR490IEE", ct: "HepG2", target: "UCHL5"},
    {accession: "ENCSR506OTC", ct: "K562", target: "TBRG4"},
    {accession: "ENCSR506UPY", ct: "HepG2", target: "SUGP2"},
    {accession: "ENCSR513NDD", ct: "HepG2", target: "SRSF7"},
    {accession: "ENCSR520BZQ", ct: "K562", target: "HNRNPU"},
    {accession: "ENCSR527DXF", ct: "HepG2", target: "EFTUD2"},
    {accession: "ENCSR529FKI", ct: "K562", target: "YBX3"},
    {accession: "ENCSR529GSJ", ct: "K562", target: "DHX30"},
    {accession: "ENCSR532VUB", ct: "K562", target: "CPSF6"},
    {accession: "ENCSR534YOI", ct: "K562", target: "PRPF8"},
    {accession: "ENCSR539ZTS", ct: "K562", target: "TROVE2"},
    {accession: "ENCSR541QHS", ct: "K562", target: "AUH"},
    {accession: "ENCSR543TPH", ct: "HepG2", target: "AGGF1"},
    {accession: "ENCSR550DVK", ct: "HepG2", target: "HNRNPC"},
    {accession: "ENCSR565DGW", ct: "HepG2", target: "DHX30"},
    {accession: "ENCSR568DZW", ct: "K562", target: "TAF15"},
    {accession: "ENCSR570WLM", ct: "HepG2", target: "QKI"},
    {accession: "ENCSR571ROL", ct: "HepG2", target: "XRCC6"},
    {accession: "ENCSR571VHI", ct: "K562", target: "HNRNPUL1"},
    {accession: "ENCSR576SHT", ct: "K562", target: "DDX42"},
    {accession: "ENCSR580MFX", ct: "HepG2", target: "SUPV3L1"},
    {accession: "ENCSR584TCR", ct: "K562", target: "TARDBP"},
    {accession: "ENCSR589YHM", ct: "K562", target: "HLTF"},
    {accession: "ENCSR623VEQ", ct: "HepG2", target: "TIA1"},
    {accession: "ENCSR628IDK", ct: "K562", target: "KHDRBS1"},
    {accession: "ENCSR647CLF", ct: "K562", target: "GPKOW"},
    {accession: "ENCSR648LAH", ct: "HepG2", target: "DDX3X"},
    {accession: "ENCSR653HQC", ct: "K562", target: "DROSHA"},
    {accession: "ENCSR655NZA", ct: "HepG2", target: "XRN2"},
    {accession: "ENCSR657TZB", ct: "K562", target: "XRN2"},
    {accession: "ENCSR657TZZ", ct: "K562", target: "ZNF622"},
    {accession: "ENCSR658IQB", ct: "K562", target: "SMNDC1"},
    {accession: "ENCSR661ICQ", ct: "K562", target: "PUM2"},
    {accession: "ENCSR663NRA", ct: "K562", target: "ZRANB2"},
    {accession: "ENCSR663WES", ct: "K562", target: "BUD13"},
    {accession: "ENCSR668MJX", ct: "HepG2", target: "GRSF1"},
    {accession: "ENCSR725ARB", ct: "K562", target: "AGGF1"},
    {accession: "ENCSR736AAG", ct: "K562", target: "GTF2F1"},
    {accession: "ENCSR744GEU", ct: "HepG2", target: "IGF2BP1"},
    {accession: "ENCSR754NDA", ct: "HepG2", target: "RBM15"},
    {accession: "ENCSR755TJC", ct: "HepG2", target: "HNRNPUL1"},
    {accession: "ENCSR756CKJ", ct: "K562", target: "RBFOX2"},
    {accession: "ENCSR769UEW", ct: "HepG2", target: "HNRNPA1"},
    {accession: "ENCSR773KRC", ct: "HepG2", target: "SRSF9"},
    {accession: "ENCSR774RFN", ct: "K562", target: "FXR1"},
    {accession: "ENCSR786TSC", ct: "HepG2", target: "ILF3"},
    {accession: "ENCSR805SRN", ct: "HepG2", target: "LARP4"},
    {accession: "ENCSR815VVI", ct: "HepG2", target: "CDC40"},
    {accession: "ENCSR820DQJ", ct: "HepG2", target: "NOL12"},
    {accession: "ENCSR825SVO", ct: "K562", target: "AARS"},
    {accession: "ENCSR828ZID", ct: "HepG2", target: "HNRNPK"},
    {accession: "ENCSR830BSQ", ct: "HepG2", target: "BUD13"},
    {accession: "ENCSR840DRD", ct: "K562", target: "CSTF2T"},
    {accession: "ENCSR841EQA", ct: "HepG2", target: "TAF15"},
    {accession: "ENCSR844RVX", ct: "K562", target: "EFTUD2"},
    {accession: "ENCSR845VGB", ct: "HepG2", target: "DDX55"},
    {accession: "ENCSR861GYE", ct: "HepG2", target: "LIN28B"},
    {accession: "ENCSR861PAR", ct: "K562", target: "NONO"},
    {accession: "ENCSR862QCH", ct: "K562", target: "U2AF1"},
    {accession: "ENCSR867DSZ", ct: "K562", target: "NPM1"},
    {accession: "ENCSR867ZVK", ct: "K562", target: "YWHAG"},
    {accession: "ENCSR887FHF", ct: "K562", target: "FASTKD2"},
    {accession: "ENCSR887LPK", ct: "K562", target: "EWSR1"},
    {accession: "ENCSR888YTT", ct: "K562", target: "LARP4"},
    {accession: "ENCSR893EFU", ct: "K562", target: "DDX6"},
    {accession: "ENCSR893NWB", ct: "HepG2", target: "GRWD1"},
    {accession: "ENCSR893RAV", ct: "K562", target: "U2AF2"},
    {accession: "ENCSR916SRV", ct: "HepG2", target: "TBRG4"},
    {accession: "ENCSR919HSE", ct: "HepG2", target: "CSTF2T"},
    {accession: "ENCSR921SXC", ct: "HepG2", target: "XPO5"},
    {accession: "ENCSR923NKN", ct: "K562", target: "DDX55"},
    {accession: "ENCSR930BZL", ct: "K562", target: "DDX3X"},
    {accession: "ENCSR943MHU", ct: "K562", target: "SAFB2"},
    {accession: "ENCSR947JVR", ct: "K562", target: "DGCR8"},
    {accession: "ENCSR961OKA", ct: "HepG2", target: "LARP7"},
    {accession: "ENCSR965DLL", ct: "HepG2", target: "SFPQ"},
    {accession: "ENCSR970NKP", ct: "K562", target: "LIN28B"},
    {accession: "ENCSR975KIR", ct: "K562", target: "IGF2BP1"},
    {accession: "ENCSR981WKN", ct: "K562", target: "PTBP1"},
    {accession: "ENCSR987FTF", ct: "HepG2", target: "RBFOX2"},
    {accession: "ENCSR987NYS", ct: "HepG2", target: "FAM120A"},
    {accession: "ENCSR989SMC", ct: "K562", target: "FTO"},
    {accession: "ENCSR989VIY", ct: "HepG2", target: "SRSF1"},
    {accession: "ENCSR993FMY", ct: "HepG2", target: "TROVE2"},
    {accession: "ENCSR993OLA", ct: "HepG2", target: "IGF2BP3"},
    {accession: "ENCSR999WKT", ct: "K562", target: "DDX24"}
];


export const supplementary_table_1 = {cols: cols, data: data};