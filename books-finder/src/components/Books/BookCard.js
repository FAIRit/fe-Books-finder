import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Card, CardHeader, CardContent } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { Avatar, IconButton, CardMedia, Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
// import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import theme from "../../theme";
import styles from "./Books.module.css";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import Comments from "../Comments/Comments";
import  { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
root2: {
padding: theme.spacing(2),
textAlign: "center",
display: 'flex',
justifyContent:"spaceBetween"
},
closeButton: {
position: "absolute",
right:10,
marginRight:0,
top:0,
color: theme.palette.grey[500]
},
// openButton: {
//   color: theme.palette.grey[500],
// }
}));

const DialogTitle = withStyles(styles)(props => {
const { children, classes, onClose, ...other } = props;
return (
<MuiDialogTitle disableTypography className={classes.root2} {...other}>
<Typography variant="h6">{children}</Typography>
{onClose ? (
<IconButton
aria-label="close"
className={classes.closeButton}
onClick={onClose}
>
 <CloseIcon />
</IconButton>
) : null}
</MuiDialogTitle>
);
});

 const DialogContent = withStyles(theme => ({
root: {
 padding: theme.spacing(2)
 }
}))(MuiDialogContent);



function BookCard (props)  {
  const {
    isFavourite,
    book,
    book: {
      data: {title, author, publisher, imageURL, id },
      descriptions: { descriptionBasic, descriptionExtended },
      keywords:[]
    }
  } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} >
        <Paper
        variant ="elevation"
        style= {{boxShadow:'#0077BF'}}
          className={styles.paper}
        >
              <div className={styles.title}>
                <Typography variant="h6" style={{ textAlign: "center", paddingTop:20, lineHeight:'1.2rem' }}>
               {title}
                </Typography>
                <Typography variant="body1" style={{ textAlign: "center", paddingTop:10}}>
              {author}
                </Typography>
                <Typography variant="body2" style={{ textAlign: "center", paddingTop:10, paddingBottom:10 }}>
              {publisher}
                </Typography>
              </div>    
            <div className= {styles.media}>
              <img className={styles.pictures} src={imageURL} alt="zdjęcie książki"/>
              </div>
            <Typography className = {styles.text} variant="body1">
              {descriptionBasic}
            </Typography>
            <div className = {styles.bottom}>
            <IconButton
          aria-label="add to favorites"
          style={{ color: isFavourite ? "#fda8c9" : "#3c3d47", paddingRight:20 }}
          onClick={() => {
            props.onAddToFavourite(book, isFavourite);
          }}
        >
          <FavoriteIcon />
        </IconButton>
          <Button
           variant="outlined"
           onClick={handleClickOpen}
          //  href={`books/${book.id}`}
           >
           {/* <NavLink to={`books/${book.id}`}>{book.title}</NavLink> */}
            Pokaż więcej
          </Button> 
  </div> 
   </Paper>
     </Grid>
           <Dialog
           maxWidth="lg"
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            style ={{display: "flex"}}
            id="customized-dialog-title"
            onClose={handleClose}
            key={id}
          >
            {title}
            <br />
            {author}
            <br/>
            {publisher}
            </DialogTitle>   
         <DialogContent
         dividers  
          style ={{display: "flex"}}
         >
            <div>
              <img
                src={imageURL}
                style={{ width: "auto", height: 350, width:250 }}
                alt="zdjęcie ksiazki"
              />
            </div>
      
 
          <div>
            <Typography style={{ textAlign: "justify",justifyContent:"center", padding: 15 }}>
              {descriptionBasic}
              {descriptionExtended}
                </Typography>
                </div>
                <br/>
           
      </DialogContent>   
             <IconButton
          aria-label="add to favorites"
          style={{ color: isFavourite ? "#fda8c9" : "#3c3d47", paddingRight:20 }}
          onClick={() => {
            props.onAddToFavourite(book, isFavourite);
          }}
        >
          <FavoriteIcon />
        </IconButton>
              {/* <Comments  /> */}
  
        </Dialog>
     </>
      )
        }
      export default BookCard;


         
   
