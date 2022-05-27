import React from 'react';
import axios from 'axios';
import { ArticleCard } from './ArticleCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default class HomeGrid extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    axios.get("http://localhost:8080/articles")
      .then(res => {
        const values=res.data;
        console.log("bla");
        this.setState({ articles: values });
      })
     
  }

  render() {
    return (

        
       


        <Container fluid>
        <Row className="g-4">
          {Array.from({ length: this.state.articles.length }).map((_, idx) => (
            <Col>
              <ArticleCard articleData={this.state.articles[idx]} />
            </Col>
          ))}
        </Row>
      </Container>
     
    )
  }
}