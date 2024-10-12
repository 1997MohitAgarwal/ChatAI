# Chatbot Component

## Overview

This project contains a simple chatbot built in React. The chatbot responds to a set of predefined commands. This `README.md` provides guidance on how to interact with the chatbot and what responses to expect based on the input.

The chatbot accepts various commands and responds accordingly. Below are the supported commands that the user can type and the expected bot responses:

### General Greetings

- **User Input:**
  - `Hi`
  - `Hello`
  - `How are you?`
  - `How about you?`

- **Bot Response:**
  - If the user says "Hi" or "Hello", the bot will respond: 
    - `"Hello, How are you?"`
  - If the user asks "How are you?", the bot will respond: 
    - `"Hello, I am doing great."`

### Weather Inquiry

- **User Input:**
  - `What is the weather like?`
  - `Tell me the weather.`

- **Bot Response:**
  - `"It's pleasant outside. You should take a walk."`

### Fetching a Newspaper

- **User Input:**
  - `Fetch me a newspaper.`
  - `Give me today's newspaper.`

- **Bot Response:**
  - If the newspaper has not been fetched yet: 
    - `"Here is your newspaper."`
  - If the newspaper has already been fetched: 
    - `"I think you don't get another newspaper the same day."`

### Adding to Shopping List

- **User Input:**
  - `Add [item] to my shopping list.`
  
  Replace `[item]` with the actual item you want to add, e.g., "Add apples to my shopping list."

- **Bot Response:**
  - If the item is not already in the list: 
    - `"Apples added to your shopping list."`
  - If the item is already in the list: 
    - `"You already have apples in your shopping list."`

### Reading the Shopping List

- **User Input:**
  - `Read my shopping list.`
  
- **Bot Response:**
  - If the shopping list has items: 
    - `"Here is your shopping list: apples, bananas, etc."`
  - If the shopping list is empty: 
    - `"You have no items in your shopping list."`

### Cleaning the Room

- **User Input:**
  - `Clean the room.`
  
- **Bot Response:**
  - If the room has not been cleaned yet: 
    - `"Room is cleaned. It looks tidy now. Job completed at [hour]:[minute]."`
  - If the room was recently cleaned: 
    - `"The room was just cleaned [X] minute(s) ago. I hope it's not dirty."`

### Default Response

- **User Input:**
  - Any unsupported commands or inputs.

- **Bot Response:**
  - `"Hmm.. I need to upgrade myself more."`

## Example Interactions

1. **User:**
   - `Hi`
   
   **Bot:**
   - `"Hello, How are you?"`
   
2. **User:**
   - `Add milk to my shopping list`
   
   **Bot:**
   - `"Milk added to your shopping list."`
   
3. **User:**
   - `Read my shopping list`
   
   **Bot:**
   - `"Here is your shopping list: milk."`
   
4. **User:**
   - `Clean the room`
   
   **Bot:**
   - `"Room is cleaned. It looks tidy now. Job completed at [time]."`

## Future Improvements

The bot currently supports basic commands. In the future, additional commands and improvements to the bot's conversational abilities may be added.

---

Thank you for using the chatbot! Feel free to explore and modify the code for additional functionality.
