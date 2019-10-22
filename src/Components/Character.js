import React from "react";
import {Header, Segment, Button, List} from "semantic-ui-react";



class Character extends React.Component {
  state = { open: false, }


  toggleOpen = () => {
    this.setState({ open: !this.state.open })
  }
  toggleClose = () => {
    this.setState({ open: !this.state.open})
  }

  render() {
    const info = this.props.charInfo;
    if(!this.state.open){
      return <Button basic floated="right" icon="caret down" onClick={this.toggleOpen} />
    }
    return(
      <>
      <Button floated="right" icon="caret up" onClick={this.toggleClose} />
      <List>
        <List.Item>Gender: {info.gender}</List.Item>
        <List.Item>Birth Year: {info.birth_year}</List.Item>
        <List.Item>Eye Color: {info.eye_color}</List.Item>
        <List.Item>Hair Color: {info.hair_color}</List.Item>
        <List.Item>Skin Color: {info.skin_color}</List.Item>
        <List.Item>Heighth: {info.height}</List.Item>
        {/* <List.Item>Homeworld: {info.homeworld}</List.Item> */}
      </List>
      </>
    )
  }
}

export default Character;