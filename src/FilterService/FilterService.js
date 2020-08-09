import React, { Component } from 'react';
import './FilterService.css';
import { ButtonGroup, Button } from 'react-bootstrap';
import { SortUpAlt, SortDownAlt } from 'react-bootstrap-icons';

class FilterService extends Component {

    sortByYoungestAge = (props) => {
        return props.sort((a, b) =>  a.dob.age - b.dob.age);
    }

    sortByOldestAge = (props) => {
        return props.sort((a, b) =>  b.dob.age - a.dob.age);
    }

    render() {
        return(
            <div className="sort">
                <h4>FILTER</h4>
                <div className="age-filter">
                    <p>By Age</p>
                    <ButtonGroup aria-label="Sort By Age">
                        <Button 
                            variant="outline-warning" 
                            onClick={() => this.props.handlerSort(this.sortByYoungestAge(this.props.users))}>
                            <SortDownAlt />
                        </Button>
                        <Button 
                            variant="outline-warning" 
                            onClick={() => this.props.handlerSort(this.sortByOldestAge(this.props.users))}>
                            <SortUpAlt />
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}

export default FilterService;