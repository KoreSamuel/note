import React, { PropTypes, Component } from 'react';

export default class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name
        }
        return (
            <a href='#' onClick={e => {
                e.preventDefault();
                this.props.onFilterChange(filter)
            }}>
                {name}
            </a>
        )
    }
    render() {
        return (
            <p>
                show: {' '}
                {this.renderFilter('SHOW_ALL', 'ALL')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
            </p>
        )
    }

}
Footer.PropTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}
