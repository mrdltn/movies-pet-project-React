import React from 'react';

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
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
        // const { type } = this.state;

        return (
            <div className='row'>
                <div className='col s12'>
                    <div className='input-field'>
                        <input
                            placeholder='search'
                            type='search'
                            className='validate'
                            value={this.state.search}
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className='btn search-btn'
                            onClick={() =>
                                this.props.searchMovies(
                                    this.state.search,
                                    this.state.type
                                )
                            }
                        >
                            Search
                        </button>
                    </div>

                    <div>
                        <label>
                            <input
                                className='with-gap'
                                type='radio'
                                name='type'
                                checked={this.state.type === 'all'}
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
                                checked={this.state.type === 'movie'}
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
                                checked={this.state.type === 'series'}
                                onChange={this.handleFilter}
                                data-type='series'
                            />
                            <span>Series only</span>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export { Search };
