import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/filter.css';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

function FilterByMount(props) {

    const { From, To, MoneyFrom, MoneyTo, Category } = useSelector(state => state)
    const dispatch = useDispatch();



    const changeLimit = () => {


        let data = {
            MoneyFrom,
            MoneyTo,
            Category
        }
        fetchSort(data);
    }
    const fetchSort = (arg) => {
        fetch(`http://localhost:8000/api/sort/`, {
            method: "POST",
            body: JSON.stringify(arg),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(data => data.json())
            .then(data => dispatch({ type: 'CHANGE_LIMIT_FINAL', payload: data }))
    }


    return (
        <div className='filterByMount'>
            <div className='container'>
                <div className='row py-4 mt-2 '>
                    <PriceFilter />
                    <CategoryFilter />
                    <div className='col-md-2 col-sm-2 ' id='search_filter'> 
                        <button className='btn btn-primary  w-100' onClick={changeLimit}>Qidiruv</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterByMount;