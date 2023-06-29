import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';



const Expenses = (props) => {
 const [filter,setFilter]=useState(2020);
 const FilterHandler=(filterdata)=>{
setFilter(filterdata);
 }
 console.log(filter);
  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={FilterHandler}/>
     {props.items.map((data)=>{
      return(
        <ExpenseItem
        key={data.id}
        title={data.title}
        amount={data.amount}
        date={data.date}
      />
      )
     })
     } 
     
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
