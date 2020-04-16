import React, { Component } from "react";
import {
  Button,
  Grid,
  Paper,
  TextField
} from "@material-ui/core";
import "../../App.css";
import styles from "./Books.module.css";

class Filters extends Component {
  state = {
    category: "all"

  };
  handleCategoryButton = event => {
    this.props.handleCategoryButton(event.target.value);
    this.setState({
      ...this.state,
      category: event.target.value
    });
  };

  onTitleFilterChanged = event => {
    console.log(24, "test");
    this.props.onTitleFilterChanged(event.target.value);
  };
  onKeywordsFilterChanged = event => {
    this.props.onKeywordsFilterChanged(event.target.value);
  };
  onAuthorFilterChanged = event => {
    this.props.onAuthorFilterChanged(event.target.value);
  };
  onPublisherFilterChanged = event => {
    this.props.onPublisherFilterChanged(event.target.value);
  };
  onKeyWordsFilterChanged = event => {
    this.props.onKeywordsFilterChanged(event.target.value);
  };
  onCategoryFilterChanged = category => {
    this.props.handleCategoryButton(category);
  };

  removeAllFilters = event => {
    this.props.removeAllFilters(event.target.value);
    this.setState({
      category: "all"
    });
  };

  render() {
    return (
      <>
        <div className={styles.category}>
          <Grid container spacing={5}>
            <Grid item sm={12} md={4}>
              <Paper className = {styles.categoryButtons}>
                <img
                alt="ilustracja obrazująca dzieci"
                  className={styles.pictures}
                  src="images/undraw_children_4rtb.png"
                />
                <Button
                  style={{ backgroundColor: "#6C63FF",height:60  }}
                  fullWidth
                  value="children"
                  onClick={() => this.onCategoryFilterChanged("children")}
                >
                  Książki dla dzieci
                </Button>
              </Paper>
            </Grid>
            <Grid item sm={12} md={4}>
              <Paper className = {styles.categoryButtons}>
                <img
                 alt="ilustracja obrazująca rodzinę"
                  className={styles.pictures}
                  src="images/undraw_quality_time_wiyl.png"
                />
                <Button
                  style={{ backgroundColor: "#6C63FF",height:60}}
                  fullWidth
                  value="parents"
                  onClick={() => this.onCategoryFilterChanged("parents")}
                >
                  Książki dla rodziców
                </Button>
              </Paper>
            </Grid>
            <Grid item sm={12} md={4}>
              <Paper className = {styles.categoryButtons}>
                <img
                 alt="ilustracja obrazująca Panią nauczycielkę"
                  className={styles.pictures}
                  style = {{width:180, height:180}}
                  src="images/undraw_teacher_35j2.svg"
                />
                <Button
                  style={{ backgroundColor: "#6C63FF", height:60 }}
                  fullWidth
                  value="teachers"
                  onClick={() => this.onCategoryFilterChanged("teachers")}
                >
                  Książki dla pedagogów/terapeutów
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <div className={styles.filters}>
          <Grid container spacing={2} style= {{marginTop:30}}>
            <Grid item xs={6} md={3}>
              <TextField size="small" id="outlined-basic" label="Tytuł" variant="outlined" onChange={this.onTitleFilterChanged} />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField size="small" id="outlined-basic" label="Autor" variant="outlined"onChange={this.onAuthorFilterChanged} />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField size="small" id="outlined-basic" label="Wydawnictwo" variant="outlined" onChange={this.onPublisherFilterChanged} />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField size="small" id="outlined-basic" label="Słowo kluczowe" variant="outlined" onChange={this.onKeyWordsFilterChanged} />
            </Grid>
            </Grid>
            <Grid item xs={6} md={2}>
              </Grid>  
                </div>  
                <div className={styles.removeButton}>
            <Button
              variant="outlined"
              size="medium"
              onClick={this.removeAllFilters}
            >
              Usuń filtry
            </Button>
            </div>
      
 
      </>
    );
  }
}
export default Filters;
