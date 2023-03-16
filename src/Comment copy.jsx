import React, { useRef, useState } from 'react';

function WriteComment({handleCommentSubmit, nextId}){ //정보 전달은 상위 컴포넌트에서
  const [nickname, setNickname] = useState("");
  const [comment, setComment] = useState("");
  
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = () => {
    handleCommentSubmit(nextId.current, nickname, comment);
    setNickname("");
    setComment("");
    nextId.current += 1;
  };
  return(
    <div>
    <input type="text" placeholder="닉네임" value={nickname} onChange={handleNicknameChange} /> 
    <br />
    <textarea placeholder="댓글" value={comment} onChange={handleCommentChange} />
    <br />
    <button onClick={handleSubmit}>글쓰기</button>
    </div>
  );
}

function User({ user,onEdit,onRemove }) {
  return (
    <div>
      <b>{user.nickname}</b> <span>({user.comment})</span>
      <button onClick={() => onEdit(user.id)}>편집</button> {/*onEdit 수정해아함 */}
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({users, onEdit, onRemove}) { //users는 write해준 후 가져오면 된다.
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
} //수정해야함 

function CommentBoard({users, onEdit, onRemove}){
  return(
    <div>
      <h3>Comments:</h3>
      <UserList users={users} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

function Comment(){ 
  const [users, setUsers] = useState([]);
  
  const handleCommentSubmit = (id,nickname, comment) => {
    if ((nickname!=="")&&(comment!=="")){
    const newUser = {id:id, nickname: nickname, comment: comment};
    setUsers([...users, newUser]);
    }
    else if((nickname==="")){
      alert('닉네임을 입력하세요');
    }
    else if((comment==="")){
      alert('코멘트를 작성해주세요');
    }
  };
  
  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  const onEdit = (id) =>{ //에러발생 -> 수정 예정
    const updatedUsers = [...users];
    const targetIdx = updatedUsers.findIndex(item=> item.id === id);
    const newComment=1
    updatedUsers[targetIdx]=newComment;
    setUsers(updatedUsers);
  } ;
  

  const nextId = useRef(0);
  //console.log(users)
  return(
    <div>
      <WriteComment handleCommentSubmit={handleCommentSubmit} nextId={nextId} />
      <CommentBoard users={users} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  );
}

export default Comment;
