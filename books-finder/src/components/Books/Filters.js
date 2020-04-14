import React, { Component } from "react";
import {
  Input,
  Select,
  MenuItem,
  Button,
  Grid,
  Paper,
  ButtonGroup,
  TextField
} from "@material-ui/core";
import "../../App.css";
import SearchIcon from '@material-ui/icons/Search';
import styles from "./Books.module.css";

class Filters extends Component {
  state = {
    category: "all"
    // title: " ",
    // author: " ",
    // publisher: " ",
    // keyword: " "
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
    const { category, title, keywords, author, publisher } = this.state;
    return (
      <>
      {/* <div className ={styles.bigContainer?} */}
        <div className={styles.category}>
          <Grid container spacing={5}>
            {/* <Grid item xs={3} sm={1.5}></Grid> */}
            <Grid item sm={12} md={4}>
              <Paper className = {styles.categoryButtons}>
                <img
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
            {/* <Grid item xs={3} sm={1.5}></Grid> */}
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
<<<<<<< HEAD

export default Filters;
=======
export default Filters;
// class Filters extends Component {
//   state = {
//     category: "all",
//     // title: " ",
//     // author: " ",
//     // publisher: " ",
//     // keyword: " "
//   };

// onCategoryFilterChanged = event => {
//     this.props.handleCategoryButton(category);
//   };

//   onTitleFilterChanged = event => {
//     this.props.onTitleFilterChanged(event.target.value);
//   };
//   onKeywordsFilterChanged = event => {
//     this.props.onKeywordsFilterChanged(event.target.value);
//   };
//   onAuthorFilterChanged = event => {
//     this.props.onAuthorFilterChanged(event.target.value);
//   };
//   onPublisherFilterChanged = event => {
//     this.props.onPublisherFilterChanged(event.target.value);
//   };
//   render() {
//     const { category
//       // , title, keywords, author, publisher
//      } = this.state;

//     return (
//       <>
//         <div className={style.categoryButtons}>
//             <Button value="children" onClick = {()=>this.onCategoryFilterChanged('children')}>Książki dla dzieci</Button>
//             <Button value="teachers" onClick = {()=>this.onCategoryFilterChanged('teachers')}>Książki dla pedagogów/terapeutów</Button>
//             <Button value="parents" onClick = {()=>this.onCategoryFilterChanged('parents')}>Książki dla rodziców</Button>
//         </div>
//         <div className={style.filters}>
//           TYTUŁ
//           <Input onChange={this.onTitleFilterChanged} />
//           AUTOR
//           <Input onChange={this.onAuthorFilterChanged} />
//           WYDAWNICTWO
//           <Input onChange={this.onPublisherFilterChanged} />
//           SŁOWO KLUCZOWE
//           <Input onChange={this.onKeyWordsFilterChanged} />
//         </div>
//       </>
//     );
//   }
// }

// export default Filters;
>>>>>>> roboczy-branch
