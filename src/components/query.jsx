import React, {useState, useEffect} from 'react';

import { Button, Form, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


export const Query = ({cols, runQuery}) => {
    const [queries, setQueries] = useState({});
    const [queryCount, setQueryCount] = useState(0);
    const [deleteQuery, setDeleteQuery] = useState(null);
    const [updateQuery, setUpdateQuery] = useState(null);

    const numericalOPS = [
        "greater than",
        "equal to", 
        "not equal to", 
        "less than",
        "less than or equal to",
        "greater than or equal to"
        ]

    useEffect(() => {
        if(deleteQuery != null){
            let new_queries = Object.assign({}, queries);  // creating copy of state variable jasper
            delete new_queries[deleteQuery]   
            setQueries(new_queries)
        }
        return () => {

            setDeleteQuery(null)
        }
    }, [deleteQuery])

    useEffect(() => {
        if(updateQuery){
            let new_queries = Object.assign({}, queries);  // creating copy of state variable jasper
            new_queries[updateQuery.index] = updateQuery
            setQueries(new_queries);
        }
        return () => {
            setUpdateQuery(null)
        }
    }, [updateQuery])

    const createQuery = () => {
        let newQuery = {
            index: queryCount,
            op: "contains",
            value: "",
            column: "Choose..."
        }
        let new_queries = Object.assign({}, queries);  // creating copy of state variable jasper
        new_queries[queryCount] = newQuery;   
        setQueries(new_queries)
        setQueryCount(queryCount + 1)
    }
    const processQuery = () => {
        let runnableOperators = []
        Object.entries(queries).map((entry) => {
            let query = entry[1];
            if(!query.column || query.column == "Choose..."){
                return
            }
            let value = Number(query.value).valueOf()
            if(value || value == 0 && query.op != "contains"){
                query.value = value
            }
            runnableOperators.push(query)
        })
        runQuery(runnableOperators)
    }

    return(
        <div style={{marginBottom: "10px"}}>
            <Button style={{marginBottom: '1rem'}} className="btn-primary" onClick={() => createQuery()}>Add Filter</Button>
            {Object.keys(queries).length != 0 &&
            ( <div>
            {Object.entries(queries).map((entry, i) => {
                let query = entry[1];
                return(
                <QueryForm query={query} 
                    cols={cols}
                    onSubmit={processQuery} 
                    onChange={(query) => {setUpdateQuery(query)}} 
                    onDelete={(i) => {
                    setDeleteQuery(i)
                } }/>
                )
            })}
            <Button className="btn-success" onClick={() => processQuery()}>Apply Filter</Button>
            </div>
            )
        }
            
            
        </div>
        	
    )

}

export const QueryForm = ({
    cols, 
    onDelete, 
    onChange, 
    isValid,
    query,
    onSubmit,
    operators=[
        'contains', 
        "greater than",
        "equal to", 
        "not equal to", 
        "less than",
        "less than or equal to",
        "greater than or equal to"
        ]}) => {
    return(
        <Form onSubmit={
            (e) => {
                e.preventDefault()
                onSubmit()
            }
        }>
            <Row>
                <Col>
                
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Column</Form.Label>
                    <Form.Control as="select" value={query.column} onChange={
                        (e) => {
                            query.column = e.target.value
                            onChange(query)
                        }
                        }
                        >
                        <option>Choose...</option>
                        {cols.map((col) => {
                        return <option>{col.text}</option>
                        })}
                        
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Operator</Form.Label>
                    <Form.Control as="select" value={query.op} onChange={
                        (e) => {
                            query.op = e.target.value
                            onChange(query)
                        }
                        }>
                        {operators.map((op) => {
                            return <option>{op}</option>
                        })}
                        
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                    <Form.Label>Value</Form.Label>
                    <Form.Control
                        type="text"
                        name="value"
                        value={query.value}
                        onChange={
                            (e) => {
                                query.value = e.target.value
                                onChange(query)
                            }}
                        isValid={isValid}
                    />
                </Col>
                <Icon.XCircleFill onClick={() => onDelete(query.index)}/>
            </Row>
            
        </Form>
       
    )
}