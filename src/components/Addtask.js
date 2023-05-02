import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Row, Col } from 'antd'
import { addTask } from '../JS/Actions/action'

function Addtask() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    const [description, setDescription] = useState("")
    const [done, setDone] = useState(false)
    function addtask() {
        //setData()

        dispatch(addTask({ description, done }))
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
        fontFamilly: "Arial"
    }
    const displaystyle = {
        display: 'flex', flexDirection: 'column', justifyContent: 'start'
    }
    return <div style={{ padding: "5%" }}>

        <Row >
            <Col span={12} >
                <Row justify='center'>
                    <div style={displaystyle}>
                        <label style={styletitle2}>Description :</label>
                        <Input placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                    </div>

                </Row>
                <Row justify='center'>
                    <div style={displaystyle}>
                        <label style={styletitle2}>Done :</label>
                        <Input placeholder="Done" onChange={(e) => setDone(e.target.value)} />
                    </div>

                </Row>
            </Col>


        </Row>


        <Row justify='center'>
            <Button style={{ color: "white", backgroundColor: "#000B49", fontSize: "18px", margin: "4px", cursor:"pointer" }}
                onClick={addtask}>
                Ajouter
            </Button>
        </Row>


    </div>;
}

export default Addtask;
