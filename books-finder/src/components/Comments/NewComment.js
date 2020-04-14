import React, { useState } from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody";

// import BurgersTableRow from "./BurgersTableRow";
// import BurgersTableEditRow from "./BurgersTableEditRow";

export default 
// ({ comments, onDelete, onSave }) 
()=> {
    const [editId, setEditId] = useState(null);

    // state = {
    //     editId: null
    // }
    //
    // setEditId = (value) => {
    //     this.setState({
    //         editId: value
    //     })
    // }

    // const handleOnEdit = (id) => {
    //     setEditId(id);
    // };

    // const handleOnCancel = () => {
    //     setEditId(null);
    // };

    // const handleOnSave = () => {
    //     setEditId(null);
    //     onSave();
    // };

    return <TableContainer component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Autor</TableCell>
                    <TableCell>Opinia</TableCell>
                    <TableCell>Ocena</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                COMMENTS
                {/* {
                    comments.map(comment =>
                        comment.id === editId ?
                        <BurgersTableEditRow
                            key={comment.id}
                            burger={burger}
                            onCancel={handleOnCancel}
                            onSave={handleOnSave}
                            isAdmin={isAdmin}
                        />
                        :
                        <BurgersTableRow
                            key={burger.id}
                            burger={burger}
                            onDelete={onDelete}
                            onEdit={handleOnEdit}
                            isAdmin={isAdmin}
                        />
                    )
                } */}
            </TableBody>
        </Table>
    </TableContainer>
}