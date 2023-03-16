import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
//import Comment from './Comment.js'
import Comment from './Comment copy'
//import ComparePic from './ComparePic';
import './App.css';
import {ComparePicture,CompareTips} from './ComparePic copy.js';
function App() {
  const tips = [
    { title: 'Tip 1', content: 'This is the content for Tip 1.' },
    { title: 'Tip 2', content: 'This is the content for Tip 2.' },
    { title: 'Tip 3', content: 'This is the content for Tip 3.' },
  ];
  return (
    <>
      <ComparePicture className="ComparePicture" pic1='logo192.png' pic2='logo512.png'/>
      <CompareTips className="CompareTips" tips={tips} />
      <Comment className="Comment"/>
    </>
  );
}

export default App;