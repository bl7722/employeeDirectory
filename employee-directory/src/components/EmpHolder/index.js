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
        </Container>
        
        </>
    )
}
}

export default EmpHolder;