import React from 'react';
import Role from './Role';

const Milestone = ({id, milestone}) => 
    <>
        <div className={id!==0 ? 'row pt-4' : 'row'}>
            <div className='col-sm-auto'>
                <span className='font-weight-bold'>{milestone.company}</span> - {milestone.location}
            </div>
            <div className='col text-sm-right'>
                {milestone.duration}
            </div>
        </div>
        {renderRoles(id, milestone.roles)}
    </>

const renderRoles = (id, roles) => {
    let i = 0
    return roles.map(role => 
        <Role id={`${id}-${i++}`} role={role} />
    )
}

export default Milestone