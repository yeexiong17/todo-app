import React from 'react'

const Notes = ({ id, message, done, time, menuOpen, doneClicked }) => {
    return (
        <div className={`${menuOpen ? "table" : ""} table-transition`}>
            <div className="overflow-auto">
                <table className="f6 w-80-l w-100 center" cellSpacing="0">
                    <tbody className="lh-copy">
                        <tr>
                            <td className="w3 ph3 pv3 bt b--black-20">
                                <div
                                    onClick={() => doneClicked(id)}
                                    className='circle w-80 ba br-100 bb b--black-20 mb-auto pointer'>
                                </div>
                            </td>
                            <td className="pr3 pv3 bt b--black-20">
                                <div>
                                    <p className={`${done ? "strike i" : ""} f5`}>{message}</p>
                                    <div className='flex items-center'>
                                        <p className={`${done ? "strike i" : ""} green mr2`}>{time}</p>
                                        <i className="ri-time-line f4"></i>
                                    </div>
                                </div>
                            </td>
                            <td className="pr3 pv3 bt b--black-20">
                                <div className='today-fit-content flex items-center ml-auto'>
                                    <i className="ri-edit-box-line pl3 pointer grow"></i>
                                    <i className="ri-delete-bin-line pl3 pointer grow dark-red"></i>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Notes
