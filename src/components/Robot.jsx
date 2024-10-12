import React, { useState } from "react";
import Chat from "./Chat"
import { v4 as uuid } from "uuid" // To generate unique Id for mapping
export default function Robot() {
  //State variables
  const [value, setValue] = useState("")
  const [messages, setMessages] = useState([{ message: "Hello, I am your bot.!!", user: false }])
  const [newspaper, setNewspaper] = useState([])
  const [clean, setClean] = useState([])
  const [list, setList] = useState([])
  const [minutes, setMinutes] = useState(null)
  const [hour, setHour] = useState(null)
  const [error, setError] = useState(false)
  //This is the function to get the instruction from the user
  function handle_change(e) {
    setValue(e.target.value)
  }
  //This is the function to get the reply from the bot
  function answer(command) {
    if (command.toLowerCase().includes("how are you") || command.toLowerCase().includes("how about you")) {
      return "Hello, I am doing great."
    }
    else if (command.toLowerCase().includes("hi") || command.toLowerCase().includes("hii") || command.toLowerCase().includes("hello")) {
      return "Hello, How are you ?"
    }
    else if (command.toLowerCase().includes("weather")) {
      return "It's pleasant outside.You should take a walk."
    }
    else if (command.toLowerCase().includes("fetch") || command.toLowerCase().includes("newspaper")) {
      if (newspaper.length > 0) {
        return "I think you don't get another newspaper the same day."
      }
      else {
        setNewspaper([...newspaper, "newspaper"])
        return "Here is your newspaper."
      }
    }
    else if (command.toLowerCase().includes("add") || command.toLowerCase().includes("to my shopping list")) {
      let item = command.split(" ")[1]
      if (list.length === 0) {
        setList([...list, item])
        return `${item} added to your shopping list`
      }
      else {
        if (list.includes(item)) {
          return `You already have ${item} in your shopping list`
        }
        else {
          setList([...list, item])
          return `${item} added to your shopping list`
        }
      }
    }
    else if (command.toLowerCase().includes("clean") || command.toLowerCase().includes("room")) {
      if (clean.length > 0) {
        var hours2 = new Date().getHours();
        var minutes2 = new Date().getMinutes();
        if (hours2 === hour) {
          let total_min = minutes2 - minutes
          return `The room was just cleaned ${total_min} minute(s) ago. I hope it's not dirty.`
        }
        else {
          let total_min = (60 - minutes + minutes2) + ((hours2 - hour) * 60)
          return `The room was just cleaned ${total_min} minute(s) ago. I hope it's not dirty.`
        }
      }
      else {
        setClean([...clean, "cleaned"])
        var hours1 = new Date().getHours();
        setHour(hours1)
        var minutes1 = new Date().getMinutes();
        setMinutes(minutes1)
        return `Room is cleaned. It looks tidy now. Job completed at ${hours1}:${minutes1 < 10 ? "0" + minutes1 : minutes1} time`
      }
    }
    if (command.toLowerCase().includes("read") && command.toLowerCase().includes("list")) {
      if (list.length > 0) {
        let result = ""
        for (let i = 0; i < list.length; i++) {
          result += i === list.length - 1 ? list[i] : list[i] + ", "
        }
        return `Here is your shopping list. ${result}`
      }
      else {
        return "You have no items in your shopping list."
      }
    }
    else {
      return "Hmm.. I need to upgrade myself more"
    }
  }
  // Clicking the send button after the user sends a instruction
  function handle_send() {
    if (value) {
      let text = [...messages, { message: value, user: true }]
      let reply = answer(value)
      text = [...text, { message: reply, user: false }]
      setMessages(text)
      setValue("")
    }
    else {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2500)
    }
  }
  //Returning JSX mapping the messages array and using the Chat component to display in the UI
  return (
    <div className="d-flex justify-content-center align-items-center flex-column position-relative">
      <div className="d-flex justify-content-center align-items-center my-3">
        <img className="size mr-4 rounded-circle" src="/assets/images/bot.png" alt="chatbot"></img>
        <h4 style={{ backgroundColor: "#19314d" }} className="text-light p-2 rounded cursor-pointer">Chatbot</h4>
      </div>
      <div className="bg-dark rounded text-danger box">
        {messages.length > 0 && messages.map((ele) => {
          return (
            <div key={uuid()} className="wow">
              <Chat {...ele} />
            </div>
          )
        })}
      </div>
      <div>
        <input className="setting" value={value} onChange={handle_change} placeholder="Enter text" type="text"></input>
        <button className="btn1" onClick={handle_send}><i className="set fa fa-paper-plane px-3"></i></button>
        {error && <h6> Please enter a message to send.</h6>}
      </div>
    </div>
  )
}