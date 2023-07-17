import './App.css';
import { Component } from 'react'
import { notes } from '../src/database'
import TopNavigation from './components/TopNavigation/TopNavigation';
import SideNavigation from './components/SideNavigation/SideNavigation';
import TodayContent from './components/TodayContent/TodayContent';
import AddTask from './components/AddTask/AddTask'

class App extends Component {

  constructor() {
    super()
    this.state = {
      menuOpen: true,
      addTask: false,
      notes: notes
    }
  }

  addTask = (bool) => {
    this.setState({ addTask: bool })
  }

  doneClicked = (id) => {
    this.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if (note.id === id) {
          return { ...note, done: !note.done };
        }
        return note;
      })
    }));
  }

  menuClicked = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  render() {
    return (
      <div>
        {
          this.state.addTask && <AddTask addTask={this.addTask} />
        }
        <SideNavigation menuOpen={this.state.menuOpen} />
        <TopNavigation menuOpen={this.state.menuOpen} menuClicked={this.menuClicked} />
        <TodayContent notes={this.state.notes} menuOpen={this.state.menuOpen} doneClicked={this.doneClicked} addTask={this.addTask} />
      </div >
    )
  }
}

export default App
