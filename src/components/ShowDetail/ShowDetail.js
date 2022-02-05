import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const ShowDetail = () => {
    let params = useParams();
    const naviget = useNavigate();
    const [detail, setDetail] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])
    return (
        <div>
            <div className="container h-screen mx-auto">
                <table className="grid grid-cols-4 flex-wrap py-10">
                    <tr className="justify-start px-10 rounded-l-xl flex  bg-slate-100 my-2 py-4 ">
                        <th>id</th>
                    </tr>
                    <tr className="justify-center flex  bg-slate-100  my-2 py-4 ">
                        <th>Title</th>
                    </tr>
                    <tr className="justify-center flex  bg-slate-100  my-2 py-4 ">
                        <th>Title</th>
                    </tr>
                    <tr className="justify-end px-10 flex rounded-r-xl bg-slate-100  my-2 py-4">
                        <th>Status</th>
                    </tr>
                    <tr className="justify-start px-10 rounded-l-xl flex  bg-slate-100 my-2 py-4 ">
                        <td>{detail.id}</td>
                    </tr>
                    <tr className="justify-center flex  bg-slate-100  my-2 py-4 ">
                        <td>{detail.title}</td>
                    </tr>
                    <tr className="justify-center flex  bg-slate-100  my-2 py-4 ">
                        <button onClick={() => { naviget(`/home`) }} className="bg-red-500 px-5 rounded-full text-white">Go to home</button>
                    </tr>
                    <tr className="justify-end px-10 flex rounded-r-xl bg-slate-100  my-2 py-4">
                        {detail.completed ? <button className="text-white bg-black px-6 rounded-full ">completed</button> :
                            <button className="text-white bg-green-500 px-8 rounded-full">Pandign</button>}
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default ShowDetail;