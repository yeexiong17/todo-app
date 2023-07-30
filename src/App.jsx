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
      newMsg: "",
      newTime: "",
      menuOpen: false,
      addNote: false,
      notes: []
    }
  }

  componentDidMount() {

    if (localStorage.getItem("notes") !== null) {
      let notes = JSON.parse(localStorage.getItem("notes"));
      this.setState({ notes: notes });
    } else {
      // Use the pre-typed database since localStorage is empty
      this.setState({ notes: notes });
    }

    this.setState(
      prevState => ({
        notes: prevState.notes.map(note => ({
          ...note,
          edit: false
        }))
      }),
      () => {
        this.saveData(); // Call saveData without async/await

        if (localStorage.getItem("notes") !== null) {
          let notes = JSON.parse(localStorage.getItem("notes"));
          this.setState({ notes: notes });
        } else {
          // Use the pre-typed database since localStorage is empty
          this.setState({ notes: notes });
        }
      }
    );
  }

  addNote = () => {
    if (this.state.newMsg == "" || this.state.newTime == "") {
      return alert("Please Type Your Note and Time")
    }
    else {
      let newId = this.state.notes.length == 0 ? 1 : (this.state.notes[this.state.notes.length - 1].id) + 1;

      this.setState(prevState => ({
        notes: [
          ...prevState.notes,
          {
            id: newId,
            message: this.state.newMsg,
            done: false,
            edit: false,
            time: this.state.newTime
          }
        ]
      }), () => {
        this.saveData()
      })

      this.setState({ newMsg: "" })
      this.setState({ newTime: "" })
    }
  }

  editNote = (id) => {
    this.setState({ newMsg: "" })
    this.setState({ newTime: "" })

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

  timeChange = (e) => {
    const timeString = `${e.$H}:${e.$m}`;
    const [hours, minutes] = timeString.split(":");
    const period = hours >= 12 ? "PM" : "AM";

    this.setState({ newTime: `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes} ${period}` })
    console.log(`${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes} ${period}`)
  }

  inputChange = (e) => {
    this.setState({ newMsg: e.target.value })
    console.log(e.target.value)
  }

  doneEdit = (id) => {
    this.setState(prevState => ({
      notes: prevState.notes.map(note => {
        if (note.id === id) {
          return {
            ...note,
            message: this.state.newMsg == "" ? note.message : this.state.newMsg,
            time: this.state.newTime == "" ? note.time : this.state.newTime,
          }
        }
        return note
      })
    }), () => {
      this.saveData()
      this.editNote(id)
    })

    this.setState({ newMsg: "" })
    this.setState({ newTime: "" })
  }

  deleteNote = (id) => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== id)
    }), () => {
      this.saveData()
    })
  }

  saveData = () => {
    try {
      let store = JSON.stringify(this.state.notes);
      localStorage.setItem("notes", store);
    } catch (error) {
      console.error("Error saving data:", error);
    }
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

        <TopNavigation
          menuOpen={this.state.menuOpen}
          menuClicked={this.menuClicked} />

        <TodayContent
          newId={this.state.newId}
          notes={this.state.notes}
          menuOpen={this.state.menuOpen}
          saveData={this.saveData}
          inputChange={this.inputChange}
          editNote={this.editNote}
          deleteNote={this.deleteNote}
          doneClicked={this.doneClicked}
          doneEdit={this.doneEdit}
          addNote={this.addNote}
          timeChange={this.timeChange} />
      </div >
    )
  }
}

export default App
