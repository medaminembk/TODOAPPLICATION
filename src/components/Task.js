import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Row, Col } from 'antd'
import {
    HomeOutlined,
    DeleteOutlined,
    CheckCircleFilled

} from '@ant-design/icons';
import { removeTask } from '../JS/Actions/action'
import EditTask from './EditTask';
const Task = ({ description, isDone, id }) => {
    const [display, setDisplay] = useState(false)
    const dispatch = useDispatch();
    function deleteitem(description, isDone, id) {
        dispatch(removeTask({
            description:description,
            isDone:isDone,
            id:id
        }))
    }

    function edititem(description, isDone, id) {
        setDisplay(true)
      
    }
    function editsucess (){
        setDisplay(!display)
    }
    

    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: "3%",
        padding: "1%",
        border: "solid 1px #000B49",
        borderRaduis: "4px"
    }
    const styledescription = {
        fontSize: "20px",
        fontWeight: "400",
        color: "#000B49",
        fontFamilly: "Arial"
    }
    return <div>
        <div style={style}>
            <label style={styledescription}>{description}</label>
            <div>
                <label>{isDone ? <CheckCircleFilled style={{color:"green", marginRight:"4px"}} /> 
                : <CheckCircleFilled style={{color:"red",  marginRight:"4px"}}/>}</label>
                {/* <Button onClick={()=>deleteitem(description, isDone, id)} >Delete</Button> */}
                <DeleteOutlined style={{color:'red', fontSize:"15px"}} onClick={()=>deleteitem(description, isDone, id)} />
                <HomeOutlined style={{color:'red', fontSize:"15px"}} onClick={()=>edititem(description, isDone, id)} />

            
            </div>

        </div>
        <div>
            {display ?  <EditTask  description={description}
            done={isDone} 
            id={id} 
            editsucess={editsucess}
            
            /> : ""}
            
       
        </div>


    </div>;
};

export default Task;
