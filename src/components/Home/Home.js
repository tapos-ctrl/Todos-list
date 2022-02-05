import React, { useEffect, useState } from 'react';
import Todos from '../Todos/Todos';

const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const url = ('https://jsonplaceholder.typicode.com/todos');
        fetch(url)
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [])


    return (
        <div>

            <div className="container mx-auto">
                <table className="grid grid-cols-4 h-full flex-wrap py-10">
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
                    {
                        todos.map(todo => <Todos todos={todo} />)
                    }
                </table>
            </div>
        </div>
    );
};

export default Home;