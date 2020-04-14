import React from 'react';
import PageWrapper from '../PageWrapper';
import CommentsTable from "./CommentsTable";
import CommentsAddForm from "./CommentsAddForm";
import Authentication from "../Authentication";
import NewComment from './NewComment';

class Comments extends React.Component {
    state = {
        comments: [],
  
    };

    componentDidMount() {
        fetch('https://books-project-5acdb.firebaseio.com/comments.json')
            .then(resp => resp.json())
            .then(objectComments=> {
                const keys = Object.keys(objectComments);
                const arrayComments = keys.map(key => {
                    return {
                        id: key,
                        ...objectComments[key]
                    }
                });

                this.setState({
                    comments: arrayComments
                })
            })
    };

    render() {
        const page = 
        <>
        {/* // <PageWrapper title="Burgers"> */}
            <NewComment
                comments={this.state.comments}
                onDelete={this.fetchData}
                onSave={this.fetchData}
                // isAdmin={this.props.isAdmin}
            />
{/*              
            //     this.props.isAdmin && <>
            //         <hr /> */}
                    <CommentsAddForm onFormSubmit={this.fetchData} />
            {/* //     </>
            // }
        // </PageWrapper> */}
        </>
        
        ;

        return (
        //  this.props.isAdmin
        //     ? 
            <Authentication>{page}</Authentication>
            // :
            //  page
        )
    }
}


export default Comments;
