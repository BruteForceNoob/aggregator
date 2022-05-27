import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/ArticleCard.css';
import { sourceImageProperties } from '../resources/properties';



export  class ArticleCard extends React.Component {

   
 


    
    
    render() {
        const articleData=this.props.articleData;
        return (
           
            <Card  onClick ={()=>window.open(articleData.link)} style={{ width: '20rem', cursor: 'pointer' }}>
                <Card.Header><img src={articleData.feedSourceImgLink} alt="article image"/> {articleData.source}</Card.Header>
                <Card.Img variant="top" src={(articleData.imageURL)?articleData.imageURL:articleData.feedSourceImgLink} alt="Article Image"/>
                <Card.Body>
                <Card.Title>        {articleData.title}
                </Card.Title>

                </Card.Body>
                <Card.Footer>{articleData.author}</Card.Footer>
            </Card>
            

    
        );
    }
}
