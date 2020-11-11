import React from "react";

//our object file
let comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    }
  };

function FormatDate(date){
    return date.toLocaleDateString();
}

function Comments(props){
    return(
        <div className="main_header">
            <div className="userdetail">
                <h3>5.Extracting components</h3>
                <img 
                    src = {props.author.avatarUrl}
                    alt = {props.author.name}
                />
                <div>
                    <h4>{props.author.name}</h4>
                </div>
            </div>

            <div className="comment_text">
                <h4>{props.text}</h4>
                <h5>{FormatDate(props.date)}</h5>
            </div>
        </div>
    );
}

function Comment(){
    return (
        <Comments date={comment.date} text={comment.text} author={comment.author} />
    );
}
export default Comment;