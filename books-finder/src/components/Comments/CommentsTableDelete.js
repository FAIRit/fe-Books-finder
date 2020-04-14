// import React from 'react';
// import TableRow from "@material-ui/core/TableRow";
// import TableCell from "@material-ui/core/TableCell/TableCell";
// import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";

// export default ({ comment, onDelete, onEdit}) => {
//     const handleOnEditClick = () => {
//         onEdit(comment.id);
//     };

//     const handleOnDeleteClick = () => {
//         fetch(`https://books-project-5acdb.firebaseio.com/comments.json/${comment.id}.json`, {
//             method: 'DELETE'
//         }).then(() => {
//             onDelete();
//         })
//     };

//     return (
//         <TableRow>
//             <TableCell>
//                 <Link to={`comments/${comment.id}`} >{comment.name}</Link>
//             </TableCell>
//             <TableCell>{comment.content}</TableCell>
//             <TableCell>{comment.author}</TableCell>
//                     <TableCell>
//                         <Button color="primary" variant="contained" onClick={handleOnEditClick}>Edit</Button>
//                     </TableCell>
//                     <TableCell>
//                         <Button color="secondary" variant="contained" onClick={handleOnDeleteClick}>Delete</Button>
//                     </TableCell>
//         </TableRow>
//     )
// };