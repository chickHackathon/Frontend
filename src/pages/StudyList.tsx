import React from "react";
import styled from "styled-components";
import StudyItem from '../components/StudyItem';

const TodoListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 32px;
  background-color: white;
`;

function StudyList() {

  return (
    <TodoListBlock>
     {/* {todos.map((todo) => {
        if (todo.date === titleDate) {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              detail={todo.detail}
              done={todo.done}
            />
          );
        }
        return null;
      })} */}
    </TodoListBlock>
  );
}

export default StudyList;
