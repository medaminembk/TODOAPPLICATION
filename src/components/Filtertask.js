import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Row, Col } from 'antd'
import { filterTask } from '../JS/Actions/action'

function Filtertask() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    const [description, setDescription] = useState("")
    const [done, setDone] = useState(false)
    function filtertask(e) {

        console.log(e.target.value)
        let object = {
            filter : e.target.value !== "" ? true: false,
            value:e.target.value
        }
        dispatch(filterTask(object))
        // let newarray=[]
        // initialState.map((item, key)=>{
        //     console.log(item.rating);
        //     console.log(e.target.value);
        //     if(e.target.value == "All"){
              
        //         newarray.push(item)
        //     }
        //     else if(item.title == e.target.value){
        //         console.log('equal');
        //         newarray.push(item)
        //     }
        // })
        // setData(newarray)
    }

   
    return  <Row >
        <select
                onChange={filtertask}
                className="custom-select"
                aria-label="Filter">
                <option value="">Select an option</option>
                <option value="true">Done</option>
                <option value="false">Not Done</option>
              
            </select>


        </Row>;
}

export default Filtertask;
