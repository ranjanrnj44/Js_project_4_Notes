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

function Avatar(props){
    return(
        <img 
            src = {props.image.avatarUrl}
            alt = {props.image.name}
            />
    );
}

function UserInformation(props){
    return(
        <div>
        <Avatar image={props.user} />
            <h4>{props.user.name}</h4>
        </div>
    );
}
function Comments(props){
    return(
        <div className="main_header">
            <div className="userdetail">
                <h4>Indivual Extracting components</h4>
                <UserInformation user={props.author} />
            </div>

            <div className="comment_text">
                <h4>{props.text}</h4>
                <h5>{FormatDate(props.date)}</h5>
            </div>
        </div>
    );
}

function IndivualExtractComment(){
    return (
        <Comments date={comment.date} text={comment.text} author={comment.author} />
    );
}
export default IndivualExtractComment;