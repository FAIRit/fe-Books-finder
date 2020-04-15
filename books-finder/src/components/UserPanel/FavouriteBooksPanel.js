import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
// import styles from "./UserPanel.module.css";

class FavouriteBooksPanel extends React.Component {
  state = {
    favouriteBooks: this.props.favouriteBooks
  };

  render() {
    return (
      <>
        <Grid container spacing= {2}>
          <Grid item>
            <Typography variant="h5" style={{ margin: "15px 0" }}>
              Moje ulubione książki:
            </Typography>
            <Grid container
             direction="row"
             justify="center"
             alignItems="center"
             spacing={3}
           >
            {this.state.favouriteBooks.map(book => {
            //   {console.log(animal.data.type)}
              return (
                <Grid item sm={3} style = {{height:200}}>
                <Card>
                  <img 
                //   className={styles.favouriteImage}
                   src={book.data.imageURL} alt="książka" style = {{width:200, textAlign:"center"}}/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {book.data.title}
                    </Typography>
                  </CardContent>
                </Card>
                </Grid>
              );
            })}
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default FavouriteBooksPanel;
