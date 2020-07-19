import React, { Component } from "react"
import Container from "../Container/index";
import Table from "../Table/index"
import Header from "../Header/index";
import API from "../../utils/API"

class EmpHolder extends Component {
    state = {
    result: [],
    search: ""
  };

  componentDidMount(){
    this.emps()
  };

  emps = () => {
    API.getEmployees()
        .then(res => this.setState({ result: res.data.results }))
        .catch(err => console.log(err));
  };

  searchEmps = query => {
        let filter = this.state.result.filter(employee => employee.name.first.includes(query)||employee.name.last.includes(query))
        this.setState({result:filter})
  };

  handleInputChange  = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmps(this.state.search)
  };
    
render(){
   let epmsList;
    epmsList = this.state.result.map(employee=>
    <Table 
        key = {employee.id.value}
        firstName ={employee.name.first} 
        lastName= {employee.name.last} 
        picture={employee.picture.large} 
        phone={employee.phone} 
        email={employee.email}
    />)
    return(
        <>
        <Header
        />
        
        <Container>
            {epmsList}
        </Container>
        <br/>
        </>
    )
}
}

export default EmpHolder;