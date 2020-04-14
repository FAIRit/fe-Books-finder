import React from 'react';
import PageWrapper from "../PageWrapper";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

class BooksDetails extends React.Component {
    state = {
        book: '',
        author: '',
        title:' ',
        publisher: ' ',
        error: false
    };

    componentDidMount() {
        fetch(`https://books-project-5acdb.firebaseio.com/books/${this.props.match.params.id}.json`)
            .then(resp => resp.json())
            .then(details => {
                if (details === null) {
                    this.setState({
                        error: true
                    })
                } else {
                    this.setState({
                        ...details
                    })
                }
            })
    }

    render() {
        const { book, author, title, publisher,    error } = this.state;

        if(error) {
            return <PageWrapper title="Such burger does not exist" />
        }

        return <PageWrapper title={`Details of ${book}`}>
            <TableContainer
   
             >
                <Table aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">Tytuł</TableCell>
                            <TableCell>{book}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Autor</TableCell>
                            <TableCell>{author}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Publisher</TableCell>
                            <TableCell>{publisher}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </PageWrapper>
    }
}

export default BooksDetails;

