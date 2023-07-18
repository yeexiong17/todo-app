import './App.css';
import { Component } from 'react'
import { notes } from '../src/database'
import TopNavigation from './components/TopNavigation/TopNavigation';
import SideNavigation from './components/SideNavigation/SideNavigation';
import TodayContent from './components/TodayContent/TodayContent';

class App extends Component {

  constructor() {
    super()
    this.state = {
      menuOpen: false,
      addNote: false,
      notes: []
    }
  }

  componentDidMount() {
    if (localStorage.getItem("notes") !== null) {
      let notes = JSON.parse(localStorage.getItem("notes"))
      this.setState({ notes: notes })
    }
    else {
      this.setState({ notes: notes })
    }
  }

  addNote = (msg, time) => {
    let newId = (this.state.notes[this.state.notes.length - 1].id) + 1;
    const [hours] = time.split(":");
    const period = hours >= 12 ? "PM" : "AM";

    if (msg !== "" && time !== "") {
      this.setState(prevState => ({
        notes: [
          ...prevState.notes,
          {
            id: newId,
            message: msg,
            done: false,
            edit: false,
            time: `${time} ${period}`
          }
        ]
      }), () => {
        this.saveData()
        document.querySelector('.addMessage').value = ""
        document.querySelector('.addTime').value = ""
      })
    }
    else {
      alert("Please Type Something")
    }
  }

  editNote = (id) => {
    this.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if (note.id === id) {
          return { ...note, edit: !note.edit }
        }
        return note
      })
    }), () => {
      this.saveData()
    })
  }

  timeChange = (e, id) => {
    const [hours] = e.target.value.split(":");
    const period = hours >= 12 ? "PM" : "AM";

    this.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if (note.id === id) {
          return { ...note, time: `${e.target.value} ${period}` }
        }
        return note
      })
    }))
  }

  inputChange = (e, id) => {
    this.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if (note.id === id) {
          return { ...note, message: e.target.value }
        }
        return note
      })
    }))
  }

  deleteNote = (id) => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }), () => {
      this.saveData()
    })
  }

  saveData = () => {
    let store = JSON.stringify(this.state.notes)
    localStorage.setItem("notes", store)
  }

  // Add strike to task when the task is done
  doneClicked = (id) => {
    this.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if (note.id === id) {
          return { ...note, done: !note.done };
        }
        return note;
      })
    }), () => {
      this.saveData()
    });
  }

  menuClicked = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  render() {
    return (
      <div>
        <SideNavigation menuOpen={this.state.menuOpen} />
        <TopNavigation menuOpen={this.state.menuOpen} menuClicked={this.menuClicked} />
        <TodayContent newId={this.state.newId} notes={this.state.notes} menuOpen={this.state.menuOpen} saveData={this.saveData} inputChange={this.inputChange} editNote={this.editNote} deleteNote={this.deleteNote} doneClicked={this.doneClicked} addNote={this.timeChange} timeChange={this.timeChange} />
      </div >
    )
  }
}

export default App
