import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const initialState = {
    author: '',
    // book_id: '',
    comment: '',
};

class CommentsAddForm extends React.Component {
    state = {
        ...initialState
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = () => {
        fetch('https://books-project-5acdb.firebaseio.com/comments.json', {
            method: "POST",
            body: JSON.stringify(this.state)
        }).then(() => {
            this.props.onFormSubmit();
            this.setState(initialState);
        })
    };

    render() {
        return <form noValidate autoComplete="off">
            <Typography variant="h5" component="h3">Dodaj komentarz</Typography>
            <div>
                <TextField
                    label="Twoja opinia"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handleOnChange}/>
            </div>
            <div>
                <TextField
                    label="nick"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleOnChange}/>
            </div>
            {/* <div>
                <TextField
                    label="Ingredients"
                    name="ingredients"
                    value={this.state.ingredients}
                    onChange={this.handleOnChange}/>
            </div>
            <div>
                <TextField
                    type="number"
                    label="Price"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleOnChange}/>
            </div> */}
            <br />
            <Button color="primary" variant="contained" onClick={this.handleSubmit}>Add</Button>
        </form>
    }
}

export default CommentsAddForm;
