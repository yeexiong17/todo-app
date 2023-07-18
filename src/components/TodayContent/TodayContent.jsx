import React from 'react'
import './TodayContent.css'
import Notes from '../Notes/Notes'

const TodayContent = ({ notes, menuOpen, doneClicked, deleteNote, addNote, editNote, inputChange, timeChange }) => {
    return (
        <div className='pt6'>
            {notes.map((note, i) => {
                return (
                    <Notes
                        key={i}
                        id={note.id}
                        message={note.message}
                        done={note.done}
                        edit={note.edit}
                        time={note.time}
                        menuOpen={menuOpen}
                        doneClicked={doneClicked}
                        deleteNote={deleteNote}
                        editNote={editNote}
                        inputChange={inputChange}
                        timeChange={timeChange}
                    />
                )
            })}
            <div className={`${menuOpen ? "table" : ""}`}>
                <div className='flex items-center w-80-l w-100 center silver bt b--black-20 ph3 pv3 pointer'>
                    <input
                        className='addMessage pa2 bn'
                        placeholder='Type To Add New Note...'>
                    </input>
                    <input
                        className='addTime ml3 pa2 br1 b--black-30'
                        type="time" />
                    <button
                        onClick={() => addNote(document.querySelector('.addMessage').value,
                            document.querySelector('.addTime').value
                        )}
                        className='flex items-center justify-between ph3 pv1 ml3 pointer'>
                        <i className="ri-add-line f3 mr2"></i>
                        <p>Add</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodayContent