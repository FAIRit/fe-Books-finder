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
      <Paper elevation={3}
    //    className={styles.paperLong}
       >
        <Grid container>
          <Grid item>
            <Typography variant="body1" style={{ margin: "15px 0" }}>
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
                <Grid item>
                <Card>
                  <img 
                //   className={styles.favouriteImage}
                   src={book.data.imageURL} alt="zwierzak"/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      book.data.title}
                    </Typography>
                  </CardContent>
                </Card>
                </Grid>
              );
            })}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default FavouriteBooksPanel;
