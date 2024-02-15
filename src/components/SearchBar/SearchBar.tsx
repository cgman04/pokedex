import React, { useState, ChangeEvent } from 'react';
import './SearchBar.css';

interface SearchProps {
    onInputChange: (inputValue: string) => void;
}

const SearchBar = ({ onInputChange }: SearchProps) => {

    const [search, setSearch] = useState('');


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setSearch(inputValue);
        onInputChange(inputValue);
    };

    const clearInput = () => {
        setSearch('');
        onInputChange('');
    };

    return (
        <div className="search-bar-container">
            <input type="search" className="search-bar" placeholder='Search...'
                onChange={handleChange} value={search} />
            {search && (
                <button className="btn" onClick={clearInput}>X</button>
            )}
        </div>
    )
};

export default SearchBar;