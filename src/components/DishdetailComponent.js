import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        console.log(comments);
        const comments_list = comments.map((c) => {
            return (
            <li key={c.id}>
                <p>{c.comment}</p>
                <p>--{c.author} ,{c.date} </p>
            </li>
            );
        });
            
        return(
            <div>
                <h4>Comments</h4>
                <list className="list-unstyled">
                    {comments_list}
                </list>
            </div>

        );

    }

    renderDish(dish) {
        if(dish != null) {

            return (
            <div className="row">    
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish.comments)}
                </div>
            </div>
            );
        }
        else {
            return <div></div>;
        }
    }

    render() {
        return (
            this.renderDish(this.props.dish)
        );
    }

}

export default DishDetail;