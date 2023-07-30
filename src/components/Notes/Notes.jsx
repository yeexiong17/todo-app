import React from 'react'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'

const Notes = ({ id, message, newMsg, done, edit, time, doneClicked, doneEdit, deleteNote, editNote, inputChange, timeChange }) => {

    return (
        <tr>
            <td className="w3 ph3 pv3-ns pv2 bt b--black-20">
                <div
                    onClick={() => doneClicked(id)}
                    className='circle w2 ba br-100 bb b--black-20 mb-auto pointer'>
                </div>
            </td>
            <td className="pr3 pv3-ns pv2 bt b--black-20">
                <div>
                    {edit ?
                        <input
                            onChange={(event) => inputChange(event)}
                            className='pa1 mb2'
                            value={newMsg}>
                        </input> :

                        <p className={`${done ? "strike i" : ""} f5`}>{message}</p>
                    }
                    <div className='flex items-center'>
                        {edit ?
                            <div className='flex items-center'>
                                <TimePicker onChange={value => { timeChange(value) }} />
                                <i className="ri-time-line ml2 f4"></i>
                            </div> :

                            <>
                                <p className={`${done ? "strike i" : ""} green mr2`}>{time}</p>
                                <i className="ri-time-line f4"></i>
                            </>
                        }
                    </div>
                </div>
            </td>
            <td className="pr3 pv3-ns pv2 bt b--black-20">
                <div className='today-fit-content flex items-center ml-auto'>
                    {edit ?
                        <i onClick={() => doneEdit(id)} className="ri-check-line pl3 pointer grow green"></i> :
                        (<>
                            <i onClick={() => editNote(id)} className="ri-edit-box-line pl3 pointer grow"></i>
                            <i onClick={() => deleteNote(id)} className="ri-delete-bin-line pl3 pointer grow dark-red"></i>
                        </>)
                    }
                </div>
            </td>
        </tr>

    )
}

export default Notes
