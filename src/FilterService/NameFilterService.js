import React, { Component } from 'react';
import './FilterService.css';
import { ButtonGroup, Button } from 'react-bootstrap';
import { SortUpAlt, SortDownAlt } from 'react-bootstrap-icons';

class NameFilterService extends Component {

    sortByLastNameUp = (props) => {
        console.log(props);
        return props.sort((a, b) =>  a.name.last > b.name.last ? 1 : - 1);
    }

    sortByLastNameDown = (props) => {
        console.log(props[0].name.last);
        return props.sort((a, b) =>  b.name.last < a.name.last ? -1 : 1);
    }

    render() {
        return(
            <div className="name-filter">
                <p>By Last Name</p>
                <ButtonGroup aria-label="Sort By Name">
                    <Button 
                        variant="outline-warning" 
                        onClick={() => this.props.handlerSort(this.sortByLastNameUp(this.props.users))}>
                        <SortDownAlt />
                    </Button>
                    <Button 
                        variant="outline-warning" 
                        onClick={() => this.props.handlerSort(this.sortByLastNameDown(this.props.users))}>
                        <SortUpAlt />
                    </Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default NameFilterService;