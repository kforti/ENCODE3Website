const cols = [{"data": "field0", "title": "First Author"}, {"data": "field1", "title": "PMID"}, {"data": "field2", "title": "Phenotype"}];

const data = [{'field2': 'Ulcerative colitis', 'field0': 'Anderson', 'field1': '21297633'}, {'field2': 'Migraine', 'field0': 'Anttila', 'field1': '23793025'}, {'field2': 'QT Interval', 'field0': 'Arking', 'field1': '24952745'}, {'field2': 'Type 1 Diabetes', 'field0': 'Barrett', 'field1': '19430480'}, {'field2': 'Inflammatory skin disease', 'field0': 'Baurecht', 'field1': '25574825'}, {'field2': 'Psoriasis', 'field0': 'Baurecht', 'field1': '25574825'}, {'field2': 'Systemic lupus erythematosus', 'field0': 'Bentham', 'field1': '26502338'}, {'field2': 'Height', 'field0': 'Berndt', 'field1': '23563607'}, {'field2': 'Obesity', 'field0': 'Berndt', 'field1': '23563607'}, {'field2': "Heschl's gyrus morphology", 'field0': 'Cai', 'field1': '25130324'}, {'field2': 'Lipid metabolism phenotypes', 'field0': 'Chasman', 'field1': '19936222'}, {'field2': 'Fibrinogen levels', 'field0': 'deVries', 'field1': '26561523'}, {'field2': 'Celiac disease', 'field0': 'Dubois', 'field1': '20190752'}, {'field2': 'Fasting glucose-related traits', 'field0': 'Dupuis', 'field1': '20081858'}, {'field2': 'Subcutaneous adipose tissue', 'field0': 'Fox', 'field1': '22589738'}, {'field2': 'Visceral adipose tissue adjusted for BMI', 'field0': 'Fox', 'field1': '22589738'}, {'field2': 'Visceral adipose tissue/subcutaneous adipose tissue ratio', 'field0': 'Fox', 'field1': '22589738'}, {'field2': 'Visceral fat', 'field0': 'Fox', 'field1': '22589738'}, {'field2': "Crohn's disease", 'field0': 'Franke', 'field1': '21102463'}, {'field2': 'Platelet count', 'field0': 'Gieger', 'field1': '22139419'}, {'field2': 'Mean platelet volume', 'field0': 'Gieger', 'field1': '22139419'}, {'field2': 'Height', 'field0': 'Gudbjartsson', 'field1': '18391951'}, {'field2': 'Motion sickness', 'field0': 'Hromatka', 'field1': '25628336'}, {'field2': 'Pulmonary function decline', 'field0': 'Imboden', 'field1': '22424883'}, {'field2': 'Inflammatory bowel disease', 'field0': 'Jostins', 'field1': '23128233'}, {'field2': 'Insulin-like growth factors', 'field0': 'Kaplan', 'field1': '21216879'}, {'field2': 'Alcohol dependence (age at onset)', 'field0': 'Kapoor', 'field1': '24962325'}, {'field2': 'Urate levels', 'field0': 'Kottgen', 'field1': '23263486'}, {'field2': 'Height', 'field0': 'Lango', 'field1': '20881960'}, {'field2': 'Phospholipid levels (plasma)', 'field0': 'Lemaitre', 'field1': '21829377'}, {'field2': 'Attention deficit hyperactivity disorder', 'field0': 'Lesch', 'field1': '18839057'}, {'field2': 'Cognitive decline rate in late mild cognitive impairment', 'field0': 'Li', 'field1': '26252872'}, {'field2': 'Pediatric autoimmune diseases', 'field0': 'Li', 'field1': '26301688'}, {'field2': "Crohn's disease", 'field0': 'Liu', 'field1': '26192919'}, {'field2': 'Inflammatory bowel disease', 'field0': 'Liu', 'field1': '26192919'}, {'field2': 'Ulcerative colitis', 'field0': 'Liu', 'field1': '26192919'}, {'field2': 'Breast cancer', 'field0': 'Michailidou', 'field1': '23535729'}, {'field2': 'Trans fatty acid levels', 'field0': 'Mozaffarian', 'field1': '25646338'}, {'field2': 'Multiple sclerosis', 'field0': 'Patsopoulos', 'field1': '22190364'}, {'field2': 'Menarche (age at onset)', 'field0': 'Perry', 'field1': '25231870'}, {'field2': 'Thyroid hormone levels', 'field0': 'Porcu', 'field1': '23408906'}, {'field2': 'Educational attainment', 'field0': 'Rietveld', 'field1': '25201988'}, {'field2': 'Schizophrenia', 'field0': 'Ripke', 'field1': '25056061'}, {'field2': 'Multiple sclerosis', 'field0': 'Sawcer', 'field1': '21833088'}, {'field2': 'Blood metabolite levels', 'field0': 'Shin', 'field1': '24816252'}, {'field2': 'Blood metabolite ratios', 'field0': 'Shin', 'field1': '24816252'}, {'field2': 'Chronic lymphocytic leukemia', 'field0': 'Speedy', 'field1': '24292274'}, {'field2': 'Metabolic traits', 'field0': 'Suhre', 'field1': '21886157'}, {'field2': 'Cholesterol, total', 'field0': 'Surakka', 'field1': '25961943'}, {'field2': 'HDL cholesterol', 'field0': 'Surakka', 'field1': '25961943'}, {'field2': 'LDL cholesterol', 'field0': 'Surakka', 'field1': '25961943'}, {'field2': 'Triglycerides', 'field0': 'Surakka', 'field1': '25961943'}, {'field2': 'Cholesterol, total', 'field0': 'Teslovich', 'field1': '20686565'}, {'field2': 'HDL cholesterol', 'field0': 'Teslovich', 'field1': '20686565'}, {'field2': 'LDL cholesterol', 'field0': 'Teslovich', 'field1': '20686565'}, {'field2': 'Triglycerides', 'field0': 'Teslovich', 'field1': '20686565'}, {'field2': 'Red blood cell traits', 'field0': 'vanderHarst', 'field1': '23222517'}, {'field2': 'Blood pressure', 'field0': 'Wain', 'field1': '21909110'}, {'field2': 'Bipolar disorder and schizophrenia', 'field0': 'Wang', 'field1': '20889312'}, {'field2': 'Cholesterol, total', 'field0': 'Willer', 'field1': '24097068'}, {'field2': 'HDL cholesterol', 'field0': 'Willer', 'field1': '24097068'}, {'field2': 'LDL cholesterol', 'field0': 'Willer', 'field1': '24097068'}, {'field2': 'Triglycerides', 'field0': 'Willer', 'field1': '24097068'}, {'field2': 'Height', 'field0': 'Wood', 'field1': '25282103'}, {'field2': 'Diisocyanate-induced asthma', 'field0': 'Yucesoy', 'field1': '25918132'}];

export const supplementary_table_7 = {cols: cols, data: data};