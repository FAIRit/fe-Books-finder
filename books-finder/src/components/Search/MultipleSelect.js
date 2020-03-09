import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {BOOKS} from '../../data/BOOKS';
import BookCardsChildren from "./BookCardsChildren";



const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));



function MultipleSelect() {
  const classes = useStyles();
  const [content, setContent] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const handleChange = event => {
    setContent(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

const showChoosen = () => {
setShow(true);
}

  return (
    <div>
      <div>
        FILTR
      </div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Zagadnienie</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={content}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={"autyzm"}>autyzm</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Zagadnienie</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={content}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={"autyzm"}>autyzm</MenuItem>
        </Select>
      </FormControl> */}
    </div>
  )


}



export default  MultipleSelect;