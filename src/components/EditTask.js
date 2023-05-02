import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Row, Col } from 'antd'
import { editTask } from '../JS/Actions/action'
const EditTask = ({description, done, id, editsucess}) => {

    const dispatch = useDispatch();
   
    const tasks = useSelector((state) => state.tasks);

    const [descriptionval, setDescriptionval] = useState(description)
    const [doneval, setDoneval] = useState(done)
    function edittask() {
        //setData()
        
        dispatch(editTask({ description: descriptionval, isDone: doneval, id: id }))

        editsucess()
    }


    const styletitle = {
        fontSize: "28px",
        fontWeight: "700",
        color: "#000B49",
        fontFamilly: "Arial"
    }
    const styletitle2 = {
        fontSize: "20px",
        fontWeight: "400",
        color: "#000B49",
        fontFamilly: "Arial",
        alignText:"left"
    }
    const displaystyle = {
        display: 'flex', flexDirection: 'column', justifyContent: 'start'
    }
    return <div style={{ padding: "1%" }}>

    <Row >
        <Col span={12} >
            <Row justify='start'>
                <div style={displaystyle}>
                    <label style={styletitle2}>Description :</label>
                    <Input placeholder="Description" value={descriptionval} onChange={(e) => setDescriptionval(e.target.value)} />
                </div>

            </Row>
            <Row justify='start'>
                <div style={displaystyle}>
                    <label style={styletitle2}>Done :</label>
                    <Input placeholder="Done" value={doneval} onChange={(e) => setDoneval(e.target.value)} />
                </div>

            </Row>
        </Col>


    </Row>


    <Row justify='center'>
        <Button style={{ color: "white", backgroundColor: "#000B49", fontSize: "18px", margin: "4px" }}
            onClick={edittask}>
            Editer
        </Button>
    </Row>


</div>;
};

export default EditTask;
