import React from 'react'
import './TodayContent.css'
import Notes from '../Notes/Notes'

const TodayContent = ({ notes, menuOpen, doneClicked }) => {
    return (
        <div className='pt6'>
            {notes.map((note, i) => {
                return (
                    <Notes
                        key={i}
                        id={note.id}
                        message={note.message}
                        done={note.done}
                        time={note.time}
                        menuOpen={menuOpen}
                        doneClicked={doneClicked}
                    />
                )
            })}
            <div className={`${menuOpen ? "table" : ""}`}>
                <div className='add-task flex items-center w-80-l w-100 center silver bt b--black-20 ph3 pv3 pointer'>
                    <i className="ri-add-line f3 mr3"></i>
                    <p>Add task</p>
                </div>
            </div>
        </div>
    )
}

export default TodayContent