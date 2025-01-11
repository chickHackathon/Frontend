import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "./TodoContext";

const Remove = styled.div`
  background: #84a1c4;
  border-radius: 7px;
  cursor: pointer;
  width: 55px;
  height: 21px;
  padding: 2px 0;
  font-weight: 600;
  text-align: center;
  font-size: 13px;
  color: white;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

const CheckCircle = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid black;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #ced4da;
      color: #ced4da;
    `}
`;

const Text = styled.div`
  flex: 1;
  padding: 2px;
  font-size: 17px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const InsertFormPositioner = styled.div`
  width: 380px;
  height: 250px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 19px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ced4da;

  .btnbundle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 25px 10px 25px;
  }
  .editbundle {
    display: flex;
    flex-direction: row;
  }
`;

const Close = styled.div`
  background: #84a1c4;
  border-radius: 7px;
  cursor: pointer;
  width: 55px;
  height: 21px;
  padding: 2px 0;
  font-weight: 600;
  text-align: center;
  font-size: 13px;
  color: white;
`;

const AddButton = styled.div`
  background: #84a1c4;
  border-radius: 7px;
  cursor: pointer;
  width: 55px;
  height: 21px;
  padding: 2px 0;
  margin-left: 3px;
  font-weight: 600;
  text-align: center;
  font-size: 13px;
  color: white;
`;

const Input1 = styled.input`
  border: none;
  border-bottom: 1px solid #607b9b;
  width: 330px;
  margin: 30px 25px 10px 25px;
  outline: none;
  font-size: 13px;
  padding-bottom: 5px;
  box-sizing: border-box;
`;

const Input2 = styled.textarea`
  border: 1px solid #607b9b;
  width: 330px;
  height: 130px;
  margin: 5px 25px 10px 25px;
  outline: none;
  resize: none;
  font-size: 13px;
  box-sizing: border-box;
`;

function StudyItem({ id, done, text, detail }) {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedDetail, setEditedDetail] = useState(detail);

  const dispatch = useTodoDispatch();

  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditTodoChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleEditDetailChange = (event) => {
    setEditedDetail(event.target.value);
  };

  const handleEditSubmit = () => {
    if (editedText.trim() === "") {
      // 입력값이 비어있으면 수정 취소
      setEditing(false);
      return;
    }

    dispatch({
      type: "EDIT",
      id: id,
      text: editedText,
      detail: editedDetail,
    });
    setEditing(false);
  };

  const handleEditCancel = () => {
    setEditedText(text);
    setEditedDetail(detail);
    setEditing(false);
  };

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>

      <Text done={done} onClick={handleEditClick}>
        {text}
      </Text>

      {/* 수정 폼 */}
      {isEditing && (
        <InsertFormPositioner ref={modalRef}>
          <Input1
            type="text"
            value={editedText}
            onChange={handleEditTodoChange}
          />
          <Input2 value={editedDetail} onChange={handleEditDetailChange} />
          <div className="btnbundle">
            <Close onClick={handleEditCancel}>취소</Close>
            <div className="editbundle">
              <Remove onClick={onRemove}>삭제</Remove>
              <AddButton onClick={handleEditSubmit}>수정</AddButton>
            </div>
          </div>
        </InsertFormPositioner>
      )}
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);

