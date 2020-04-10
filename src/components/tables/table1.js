import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
// import ExportCSVButton from 'react-bootstrap-table2-toolkit/lib/src/csv/button';

import { table1_human_transcriptome } from '../../tables/table1_human_transcriptome';
import { table1_human_transcriptional_reg } from '../../tables/table1_human_transcriptionalreg';
import { table1_human_post_transcriptional_reg } from '../../tables/table1_human_posttranscriptionalreg';
import { table1_human_genotyping } from '../../tables/table1_human_genotyping';
import { table1_mouse_transcriptome } from '../../tables/table1_mouse_transcriptome';
import { table1_mouse_transcriptional_reg } from '../../tables/table1_mouse_transcriptionalreg';

import { Table } from '../common/table';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';

const { ExportCSVButton } = CSVExport;


const HumanTab = () => (
    <div>
		<Table title='Transcriptome' 
		keyField='field0' 
		data={ table1_human_transcriptome.data } 
		columns={ table1_human_transcriptome.cols } 
		fileName= 'human-transcriptome-encode3.csv'
		/>
		<Table title='Transcriptional Regulation and Replication' 
		keyField='field0' 
		data={ table1_human_transcriptional_reg.data } 
		columns={ table1_human_transcriptional_reg.cols } 
		fileName= 'human-transcriptional-regulation-replication-encode3.csv'
		/>
		<Table title='Post-Transcriptional Regulation via RBPs' 
		keyField='field0' 
		data={ table1_human_post_transcriptional_reg.data } 
		columns={ table1_human_post_transcriptional_reg.cols }
		fileName= 'human-post-pranscriptional-regulation-via-rbps-encode3.csv'
		/>
		<Table title='Transcriptome' 
		keyField='field0' 
		data={ table1_human_genotyping.data } 
		columns={ table1_human_genotyping.cols }
		fileName= 'human-genotyping-encode3.csv'
		/>
</div>
);

const MouseTab = () => (
    <div>
		<Table title='Transcriptome' 
		keyField='field0' 
		data={ table1_mouse_transcriptome.data } 
		columns={ table1_mouse_transcriptome.cols }
		fileName= 'mouse-transcriptome-encode3.csv'
		/>
		<Table title='Transcriptional Regulation and Replication' 
		keyField='field0' 
		data={ table1_mouse_transcriptional_reg.data } 
		columns={ table1_mouse_transcriptional_reg.cols }
		fileName= 'mouse-transcriptional-regulation-replication-encode3.csv'
		/>
    </div>
);
    
class Table1 extends React.Component {

    constructor(props) {
	super(props);
	this.state = { selection: 0 };
    }

    render() {
	return (
	    <div>
			<nav aria-label="Page navigation example">
				<ul class="pagination">
					<li className={this.state.selection ? "" : "active"}>
						<a className="page-link" href="#" onClick={ () => {this.setState({ selection: 0 }); }}>Human</a>
					</li>
					<li className={this.state.selection ? "active" : ""}>
						<a className="page-link" href="#" onClick={ () => {this.setState({ selection: 1 }); }}>Mouse</a>
					</li>
				</ul>
			</nav>
	        <div className="tab-content">
	            <div id="tabhuman" className={"tab-pane " + (this.state.selection ? "" : "active")}>
	                <HumanTab/>
	            </div>
	            <div id="tabmouse" className={"tab-pane " + (this.state.selection ? "active" : "")}>
	                <MouseTab/>
	            </div>
	        </div>
            </div>
	);
    }
    
}	
export default Table1;
