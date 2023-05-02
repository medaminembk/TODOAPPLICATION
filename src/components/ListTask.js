import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Task from './Task';
import { Button, Input, Row, Col } from 'antd'
import Addtask from './Addtask';
import Filtertask from './Filtertask';

const ListTask = () => {
    const tasks = useSelector((state) => state.tasks);
    const filter = useSelector((state) => state.filtreddata);
    const filterdtask = useSelector((state) => state.filterdtask);
    console.log(tasks)
    const styletitle = {
        fontSize: "28px",
        fontWeight: "700",
        color: "#000B49",
        fontFamilly: "Arial"
    }
    useEffect(() => {
        console.log("####",tasks)
    }, [tasks ]);
    useEffect(() => {
        console.log("((((####))))",tasks)
    }, []);
    return <div>
        <Addtask />
        <label style={styletitle}>List to do</label>
        <Filtertask/>
        <Row>
         {!filter && tasks.map((item, key) => {
                return <div key={key}>
                    <Task description={item.description}
                        isDone={item.isDone}
                        id={item.id} />
                </div>
            })}
            {filter && filterdtask.map((item, key) => {
                return <div key={key}>
                    <Task description={item.description}
                        isDone={item.isDone}
                        id={item.id} />
                </div>
            })}
        </Row>



    </div>;
};

export default ListTask;
