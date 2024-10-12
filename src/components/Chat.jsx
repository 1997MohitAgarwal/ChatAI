import React from "react"
//Chat message from both user and bot.
export default function Chat(props){
  return(
    <>
      {
        props.user?<span className="inner">
          <i className="fa solid fa-user mr-3 text-info"></i>
          <span>{props.message}</span>
        </span>:
        <span className="inner1">
          <i className="fa regular fa-robot mr-3 text-info"></i>
          <span>{props.message}</span>
        </span>
      }
    </>
  )
}