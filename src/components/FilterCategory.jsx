import React from 'react';

class FilterCategory extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleFilter = (e) => {
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        const { type } = this.state;

        return (
            <div>
                <label>
                    <input
                        className='with-gap'
                        type='radio'
                        name='type'
                        checked={type === 'all'}
                        onChange={this.handleFilter}
                        data-type='all'
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        type='radio'
                        name='type'
                        checked={type === 'movie'}
                        onChange={this.handleFilter}
                        data-type='movie'
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        type='radio'
                        name='type'
                        checked={type === 'series'}
                        onChange={this.handleFilter}
                        data-type='series'
                    />
                    <span>Series only</span>
                </label>
            </div>
        );
    }
}

export { FilterCategory };
