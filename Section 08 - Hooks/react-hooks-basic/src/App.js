import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./ColorBox/color-box";
import TodoList from "./TodoList/todo-list";
import { useEffect, useState } from "react";
import TodoForm from "./TodoForm/todo-form";
import PostList from "./useEffect/components/PostList/post-list";
import Pagination from "./useEffect/components/Pagination/pagination";
import SearchBox from "./useEffect/components/SearchBox/search-box";
import Clock from "./useEffect/components/Clock/clock";
import IncreaseNumber from "./IncreaseNumber/increase-number";

function App() {
    const todoList = [
        {
            id: 1,
            title: "I love Ez FE",
        },
        {
            id: 2,
            title: "We love Ez FE",
        },
        {
            id: 3,
            title: "They love Ez FE",
        },
    ];

    const [todoListState, setTodoListSate] = useState(todoList);
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1
    })
    const [filter, setFilter] = useState({
        page: 1,
        limit: 10,
        title_like: ''
    })

    const handleTodoClick = (id) => {
        const index = todoListState.findIndex((todo) => todo.id === id);
        const newTodoList = [...todoListState];
        newTodoList.splice(index, 1);
        setTodoListSate(newTodoList);
    };

    const handleAddTodoList = (value) => {
        console.log(value);
        const id = todoListState.length + 1;
        const newTodoList = [...todoListState];
        newTodoList.push({ id: id, title: value });
        setTodoListSate(newTodoList);
    };

    useEffect(() => {
        const requestUrl =
            `http://js-post-api.herokuapp.com/api/posts?_limit=${filter.limit}&_page=${filter.page}&title_like=${filter.title_like}`;

        async function getPostList() {
            try {
                const response = await fetch(requestUrl);
                const dataJSON = await response.json();
                const { data, pagination } = dataJSON;
                setPostList(data);
                setPagination(pagination)
            } catch (error) {}
        }

        getPostList();
    }, [filter]);     

    const onPageChange = (newLimit, newPage) => {
        // setPagination({...pagination, _page: newPage})
        setFilter({...filter, page: newPage})
    }

    const onRecordChange = (newLimit) => {
        setFilter({...filter, limit: newLimit, page: 1})
    }

    const onSearchChange = (value) =>{
        setFilter({...filter, title_like: value, page: 1})      
    }

    

    return (
        <div className="App">
            <ColorBox></ColorBox>
            <TodoForm onAddTodo={handleAddTodoList}></TodoForm>
            <TodoList
                todos={todoListState}
                onTodoClick={handleTodoClick}
            ></TodoList>
            <SearchBox onSearchChange={onSearchChange}></SearchBox>
            <PostList postList={postList}></PostList>
            <Pagination pagination={pagination} onPageChange={onPageChange} onRecordChange={onRecordChange}></Pagination>
            <Clock></Clock>
            <IncreaseNumber></IncreaseNumber>
        </div>
    );
}

export default App;
