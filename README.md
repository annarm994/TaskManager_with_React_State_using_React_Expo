# TaskManager_with_React_State_using_React_Expo
Assignment_TaskManager_with_React_State_using_React_Expo

# Task Manager App

The task manager application built using React Native and Expo. Users can add new tasks and mark tasks as completed.

- When adding a new task, the spread syntax `...tasks` is used to create a new array that includes all existing tasks plus the new task.
- When toggling the completion status of a task, the `map` function creates a new array. A new task object is created with the updated `completed` status

## Running the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/TaskManagerApp.git
cd TaskManagerApp

npx expo start
