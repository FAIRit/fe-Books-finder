// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import ListItemText from '@material-ui/core/ListItemText';
// import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
// import Chip from '@material-ui/core/Chip';
// import BookCard from './BookCard';
// import BookCards from './BookCards';
// import {BOOKS} from '../../data/BOOKS';
// import { Card } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     maxWidth: 300,
//   },
//   chips: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   chip: {
//     margin: 2,
//   },
//   noLabel: {
//     marginTop: theme.spacing(3),
//   },
// }));

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [BOOKS[0].author];
// const titles = [BOOKS[0].title];
// const keywords = [BOOKS[0].keywords];


// function getStyles(name, title, keywords, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export default function MultipleSelect() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [personName, setPersonName] = React.useState([]);

//   const handleChange = event => {
//     setPersonName(event.target.value);
//   };

//   const handleChangeMultiple = event => {
//     const { options } = event.target;
//     const value = [];
//     for (let i = 0, l = options.length; i < l; i += 1) {
//       if (options[i].selected) {
//         value.push(options[i].value);
//       }
//     }
//     setPersonName(value);
//   };

//   return (
//     <div>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="demo-mutiple-name-label">Tytuł</InputLabel>
//         <Select
//           labelId="demo-mutiple-name-label"
//           id="demo-mutiple-name"
//           multiple
//           value={titles}
//           onChange={handleChange}
//           input={<Input />}
//           MenuProps={MenuProps}
//         >
//           {BOOKS.map(item=> (
//             <MenuItem key={item.id} value={BOOKS.title} 
//             // style={getStyles(name, title, keywords, personName, theme)}
//             >
//               {titles}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       < BookCards />
//       </div>
//         );
//       }
//       <FormControl className={classes.formControl}>
//         <InputLabel id="demo-mutiple-checkbox-label">Autor</InputLabel>
//         <Select
//           labelId="demo-mutiple-checkbox-label"
//           id="demo-mutiple-checkbox"
//           multiple
//           value={personName}
//           onChange={handleChange}
//           input={<Input />}
//           renderValue={selected => selected.join(', ')}
//           MenuProps={MenuProps}
//         >
//           {names.map(name => (
//             <MenuItem key={name} value={name}>
//               <Checkbox checked={personName.indexOf(name) > -1} />
//               <ListItemText primary={name} />
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//       <FormControl className={classes.formControl}>
//         <InputLabel id="demo-mutiple-chip-label">Zagadnienie</InputLabel>
//         <Select
//           labelId="demo-mutiple-chip-label"
//           id="demo-mutiple-chip"
//           multiple
//           value={keywords}
//           onChange={handleChange}
//           input={<Input id="select-multiple-chip" />}
//           renderValue={selected => (
//             <div className={classes.chips}>
//               {keywords.map(keyword=> (
//                 <Chip key={keyword} label={keyword} className={classes.chip} />
//               ))}
//             </div>
//           )}
//           MenuProps={MenuProps}
//         >
//           {keywords.map(item => (
//             <MenuItem key={keywords} value={keywords} 
//             // style={getStyles(name, personName, theme)}
//             >
//               {keywords}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     < BookCards /> 
  

