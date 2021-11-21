import React from 'react';
import { useHistory } from 'react-router';


const StudentCard = (props) => {
    const { id, name, department,studentId } = props.studentDetails;

    const history = useHistory();
    const handelClick = (id) => {
        const url = `/studentDetails/${id}`;
        history.push(url);
    }
    return (
        <div className="col-4 my-3">
        <div className="card-group">
            <div className="card">
               
                <div class="card-body">
                    <div class="d-flex">
                        <h5 hidden >{id}</h5>
                        <h5 >Name:{name}</h5>
                        </div>
                    <span></span>
                    <div>
                        <h5 >ID:{studentId}</h5>
                    </div>
                    <span></span>
                    <div class="d-flex">
                        <p class="card-text">Department:
                            {department}</p>
                           
                    </div>
                    <button className="btn btn-sm btn-primary mt-4" onClick={() => handelClick(id)}>Details</button>
                </div>
            </div>
        </div>
    </div>
    );
    
};

export default StudentCard;