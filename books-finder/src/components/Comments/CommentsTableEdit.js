// import React from 'react';
// import TableRow from "@material-ui/core/TableRow";
// import TableCell from "@material-ui/core/TableCell/TableCell";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

// class CommentsTableEdit extends React.Component {
//     state = {
//         content: this.props.comment.content,
//         author: this.props.comment.author,
//     };

//     handleOnSaveClick = () => {
//         fetch(`https://books-project-5acdb.firebaseio.com/comments/${this.props.comments.id}.json`, {
//             method: 'PUT',
//             body: JSON.stringify(this.state)
//         }).then(() => {
//             this.props.onSave();
//         })
//     };

//     handleOnCancelClick = () => {
//         this.props.onCancel();
//     };

//     handleOnChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     };

//     render() {
//         return (
//             <TableRow>
//                 <TableCell>
//                     <TextField
//                         label="content"
//                         name="content"
//                         value={this.state.content}
//                         onChange={this.handleOnChange}/>
//                 </TableCell>
//                 <TableCell>
//                     <TextField
//                         label="author"
//                         name="author"
//                         value={this.state.author}
//                         onChange={this.handleOnChange}/>
//                 </TableCell>
//                         <TableCell>
//                             <Button color="primary" variant="contained" onClick={this.handleOnSaveClick}>Save</Button>
//                         </TableCell>
//                         <TableCell>
//                             <Button variant="contained" onClick={this.handleOnCancelClick}>Cancel</Button>
//                         </TableCell>
//             </TableRow>
//         )
//     }
// };

// export default CommentsTableEdit;
