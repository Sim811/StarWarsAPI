import React from "react";
import {Header, Grid, List, Card, Button, Pagination} from "semantic-ui-react";
import Axios from "axios";
// import { styles } from "styled-components";
import Character from "./Character";



class Home extends React.Component {
  state = { people: [], planets: [] }

  componentDidMount() {
    Axios.get("https://swapi.co/api/people/")
    .then(res => {
      this.setState({people: res.data.results})
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    Axios.get("https://swapi.co/api/planets/")
    .then(res => {
      this.setState({planets: res.data.results})
      console.log(res)
    })
    // Axios.get("https://swapi.co/api/people/?page=2")
    // .then(res => {
    //   this.setState({people:res.data.results})
    //   console.log(res)
    // })

  }

  // pageChange = () => {
  //   Axios.get("https://swapi.co/api/people/")
  //   .then( res =>{
  //     this.setState({ people: res.data.next})
  //     console.log(res)
  //   })
  // }
  
  
  listPeople = () => {
    const {people} = this.state;
    if (people.length <= 0)
      return <h2>No People Listed</h2>
    return people.map(p =>
      <Card>
        <Card.Content>
          <Card.Header>
            {p.name}
            <Character charInfo={p}/>
          </Card.Header>
          {/* <Card.Content > */}
          {/* </Card.Content> */}
        </Card.Content>
      </Card>
      )

  }


  render() {
    return(
    
    <>
    <br />
      <Header as="h1" textAlign="center">
        STAR WARS
      </Header>
      <div>
        {/* <Grid > */}
          <Card.Group itemsPerRow={3}
          >
          
            {this.listPeople()}
          </Card.Group>
          {/* <Pagination onPageChange={this.pageChange} defaultActivePage={1} pointing secondary totalPages={5}/> */}
        {/* </Grid> */}
      </div>
    </>
    )
  }
};


// const styles = {
//   test: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly'
//   },
// }


export default Home;