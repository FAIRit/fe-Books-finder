// import _ from 'lodash'
// import React, { Component } from 'react'
// import { Search, Grid, Header, Segment } from 'semantic-ui-react'
// import { BOOKS} from '../../data/BOOKS';
// import BookCard from './BookCard';
// import BookCards from './BookCards';

// const source = _.times(5, () => ({
//   title: BOOKS[0].title,
//   author: BOOKS[0].author,
//   image: BOOKS[0].imageURL,
//   keyword: BOOKS[0].keyword
// }))

// const initialState = { isLoading: false, results: [], value: '' }

// export default class SearchForBook extends Component {
//   state = initialState

//   handleResultSelect = (e, { result }) => this.setState({ value: result.title})

//   handleSearchChange = (e, { value }) => {
//     this.setState({ isLoading: true, value })

//     setTimeout(() => {
//       if (this.state.value.length < 1) return this.setState(initialState)

//       const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
//       const isMatch = (result) => re.test(result.title)

//       this.setState({
//         isLoading: false,
//         results: _.filter(source, isMatch),
//       })
//     }, 300)
//   }

//   render() {
//     const { isLoading, value, results } = this.state

//     return (
//       <Grid>
//         <Grid.Column width={6}>
//           <Search
//             fluid
//             loading={isLoading}
//             onResultSelect={this.handleResultSelect}
//             onSearchChange={_.debounce(this.handleSearchChange, 500, {
//               leading: true,
//             })}
//             results={results}
//             value={value}
//             {...this.props}
//           />
//         </Grid.Column>
//         <Grid.Column width={10}>
//           {/* <Segment>
//             <Header>State</Header>
//             <pre style={{ overflowX: 'auto' }}>
//               {JSON.stringify(this.state, null, 2)}
//             </pre>
//             <Header>Options</Header>
//             <pre style={{ overflowX: 'auto' }}>
//               {JSON.stringify(source, null, 2)}
//             </pre>
//           </Segment> */}
//         </Grid.Column>
//       </Grid>
//     )
//   }
// }