import React from 'react'
import './TodayContent.css'
import Notes from '../Notes/Notes'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker'

const TodayContent = ({ notes, menuOpen, addNote, doneClicked, deleteNote, doneEdit, editNote, inputChange, timeChange }) => {

    let newTime = "";

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className='pt6'>
                <div className={`${menuOpen ? "ml7-ns" : ""} table-transition`}>
                    <div className="overflow-auto">
                        <table className="f6 w-80-l w-100 center" cellSpacing="0">
                            <tbody className="lh-copy">
                                {notes.map((note, i) => {
                                    return (
                                        <Notes
                                            key={i}
                                            id={note.id}
                                            message={note.message}
                                            newMsg={note.newMsg}
                                            done={note.done}
                                            edit={note.edit}
                                            time={note.time}
                                            doneClicked={doneClicked}
                                            deleteNote={deleteNote}
                                            editNote={editNote}
                                            inputChange={inputChange}
                                            timeChange={timeChange}
                                            doneEdit={doneEdit}
                                        />
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className='flex flex-column flex-row-ns items-center-ns justify-center w-80-l w-100 center silver bt b--black-20 ph3 pv3 pointer'>
                            <div className='flex items-center'>
                                <input
                                    className='addMessage pa2 bn'
                                    placeholder='Type To Add New Note...'
                                    onChange={(event) => inputChange(event)}
                                />
                                {/* <input
                                    className='addTime ml3 pa2 br1 b--black-30'
                                    type="time"
                                    defaultValue="00:00"
                                /> */}
                                <TimePicker onChange={value => { timeChange(value) }} />
                            </div>
                            <button
                                onClick={() => addNote()}
                                className='flex items-center justify-between mr-auto ml3-ns mt2 mt0-ns ph3 pv1 pointer'>
                                <i className="ri-add-line f3 mr2"></i>
                                <p>Add</p>
                            </button>
                        </div>

                    </div>
                </div >
            </div >
        </LocalizationProvider>
    )
}

export default TodayContent