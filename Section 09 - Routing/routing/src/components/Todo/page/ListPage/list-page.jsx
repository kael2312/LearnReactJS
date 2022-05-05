import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TodoList from "../../components/TodoList/todo-list";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

ListPage.propTypes = {};

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: "Eat",
            status: "new",
        },
        {
            id: 2,
            title: "Sleep",
            status: "completed",
        },
        {
            id: 3,
            title: "Code",
            status: "new",
        },
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        let pattern = new RegExp("[^=]*$");
        let result = location.search.match(pattern);
        return result[0] || "all";
    });

    const handleTodoClick = (todo, index) => {
        // clone current array to the new one
        const newTodoList = [...todoList];

        // toggle state
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === "new" ? "completed" : "new",
        };

        setTodoList(newTodoList);
    };

    useEffect(() => {
        setFilteredStatus(() => {
            let pattern = new RegExp("[^=]*$");
            let result = location.search.match(pattern);
            return result[0] || "all";
        });
    }, [location]);

    const onShowAllClick = () => {
        history.replace({ pathName: location.pathname, search: "?status=all" });
    };

    const onShowCompledClick = () => {
        history.replace({
            pathName: location.pathname,
            search: "?status=completed",
        });
    };

    const onShowNewClick = () => {
        history.replace({ pathName: location.pathname, search: "?status=new" });
    };

    const filteredTodoList = todoList.filter(
        (todo) => filteredStatus === "all" || filteredStatus === todo.status
    );

    return (
        <div>
            <h1>Todo List</h1>
            <TodoList
                todoList={filteredTodoList}
                onTodoClick={handleTodoClick}
            ></TodoList>

            <div>
                <button onClick={onShowAllClick}>Show All</button>
                <button onClick={onShowCompledClick}>Show Completed</button>
                <button onClick={onShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;
