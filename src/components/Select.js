import React from 'react'
import Form from 'react-bootstrap/Form';
import './BookCard.css'

const Select = ({values}) => {
    return (
      <Form.Select aria-label="Default select example">
        <option>Choose an option</option>
        <option value={values[0]}>{values[0]}</option>
        <option value={values[1]}>{values[1]}</option>
        <option value={values[2]}>{values[2]}</option>
      </Form.Select>
    )
}

export default Select