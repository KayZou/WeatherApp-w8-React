import React, { useState } from 'react';
import { InputGroup, Form, Button }  from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';


const SearchBar = ({onSearch}) => {
    const [city, setCity] = useState("");
    const [error, setError] = useState('');

    const handleSearch = () => {
        if (city.trim() === '') {
            setError('Please enter a city name.');
        } else {
            setError('');
            onSearch(city);
        }
    };

    return (
        <Form>
            <InputGroup className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Enter a city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    isInvalid={error}
                />
                
                    <Button variant="primary" onClick={handleSearch}>
                        <BiSearch />
                    </Button>
                
                <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            </InputGroup>
        </Form>
    )
}

export default  SearchBar