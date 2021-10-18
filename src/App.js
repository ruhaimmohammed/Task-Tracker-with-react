import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctor Appoinment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'School Fee',
            day: 'Mar 8th at 2:30pm',
            reminder: true,
        }
        ]
)
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
