import Table1 from './table1'
import SupplementaryTable1 from './supplementarytable1'
import SupplementaryTable2 from './supplementarytable2'
import SupplementaryTable3 from './supplementarytable3'
import SupplementaryTable4 from './supplementarytable4'
import SupplementaryTable5 from './supplementarytable5'
import SupplementaryTable6 from './supplementarytable6'
import SupplementaryTable7 from './supplementarytable7'
import SupplementaryTable8 from './supplementarytable8'
import SupplementaryTable9 from './supplementarytable9'
import SupplementaryTable10 from './supplementarytable10'

export const TABLES = {
    main_table: {component: Table1, title: "Table 1: Experiment Matrix", page_id: "main_table"},
    supplemental_1: {component: SupplementaryTable1, title: "Supp. Table 1: Surveyed RBPs", _id: "supplemental_1"},
    supplemental_2: {component: SupplementaryTable2, title: "Supp. Table 2: VISTA regions for PR curves", page_id: "supplemental_2"},
    supplemental_3: {component: SupplementaryTable3, title: "Supp. Table 3: PR curve results", page_id: "supplemental_3"},
    supplemental_4: {component: SupplementaryTable4, title: "Supp. Table 4: Newly tested enhancers", page_id: "supplemental_4"},
    supplemental_5: {component: SupplementaryTable5, title: "Supp. Table 5: Promoter prediction", page_id: "supplemental_5"},
    supplemental_6: {component: SupplementaryTable6, title: "Supp. Table 6: Histone peak overlap", page_id: "supplemental_6"},
    supplemental_7: {component: SupplementaryTable7, title: "Supp. Table 7: GWAS studies", page_id: "supplemental_7"},
    supplemental_8: {component: SupplementaryTable8, title: "Supp. Table 8: Registry datasets", page_id: "supplemental_8"},
    supplemental_9: {component: SupplementaryTable9, title: "Supp. Table 9: Consolidated ChromHMM states", page_id: "supplemental_9"},
    supplemental_10: {component: SupplementaryTable10, title: "Supp. Table 10: MAF quartiles", page_id: "supplemental_10"}
};