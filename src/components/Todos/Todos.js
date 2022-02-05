import React from 'react';
import { useNavigate } from 'react-router-dom';

const Todos = (props) => {
    const { id, completed, title, } = props.todos;
    let naviget = useNavigate()
    return (
        <>
            <tr className="justify-start px-10 rounded-l-xl flex  bg-slate-100 my-2 py-4 ">
                <td>{id}</td>
            </tr>
            <tr className="justify-center flex  bg-slate-100  my-2 py-4 ">
                <td>{title}</td>
            </tr>
            <tr className="justify-center flex  bg-slate-100  my-2 py-4 ">
                <button onClick={() => { naviget(`/showDetail${id}`) }} className="bg-red-500 px-5 rounded-full text-white">Show Detail</button>
            </tr>
            <tr className="justify-end px-10 flex rounded-r-xl bg-slate-100  my-2 py-4">
                {completed ? <button className="text-white bg-black px-6 rounded-full ">completed</button> :
                    <button className="text-white bg-green-500 px-8 rounded-full">Pandign</button>}
            </tr>
        </>
    );
};

export default Todos;