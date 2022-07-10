import React, { Fragment, useState, useEffect } from "react";
import DataGrid from "react-data-grid";
//swap to https://reactdatagrid.io/docs/getting-started instead for single row selection

const columns = [ 
    {key:'id', name: 'ID'},
    {key:'name', name: 'Name'},
    {key:'steps', name: 'Steps'},
    {key:'pic_url', name: 'Picture URL'}
];


export interface Row {
    id: string;
    name: string;
    steps: string;
    pic_url: string;
};

function rowKeyGetter(row: Row) {
    return row.id;
};

const ListRecipes = () => {

    const [ rows, setRows ] = useState([]);
    const [ selectedRows, setSelectedRows ] = useState<ReadonlySet<string>>(() => new Set());

    const getRecipes = async () => {
        try {
            const response = await fetch("http://localhost:3001/recipes", {
                method : "GET"
            });
            const jsonData = await response.json();

            setRows(jsonData);
        } catch (err) {
            let message;
            if (err instanceof Error) message = err.message;
            else message = String(err);
            console.log(message);
        }
    }

    
    useEffect(() => {
        getRecipes()
    }, []);

    return (
        <div>
            <Fragment>
                <DataGrid 
                    columns={columns} 
                    rows={rows}
                    rowKeyGetter={rowKeyGetter}
                    onRowsChange={setRows}
                    selectedRows={selectedRows}
                    onSelectedRowsChange={setSelectedRows}/>
            </Fragment>
        </div>
    )
}

export default ListRecipes;