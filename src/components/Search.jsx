import React, { useState } from 'react';

const Search = (props) => {
    const { searchMovies = Function.prototype } = props;
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            searchMovies(search, type);
        }
    };

    const handleFilter = (e) => {
        setType(e.target.dataset.type);
        searchMovies(search, e.target.dataset.type);
    };

    return (
        <div className='row'>
            <div className='col s12'>
                <div className='input-field'>
                    <input
                        placeholder='search'
                        type='search'
                        className='validate'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handleKey}
                    />
                    <button
                        className='btn search-btn'
                        onClick={() => searchMovies(search, type)}
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
                            checked={type === 'all'}
                            onChange={handleFilter}
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
                            onChange={handleFilter}
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
                            onChange={handleFilter}
                            data-type='series'
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export { Search };
