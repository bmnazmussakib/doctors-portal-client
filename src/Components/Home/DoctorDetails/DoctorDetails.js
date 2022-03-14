import React from 'react';

const DoctorDetails = ({doctor}) => {
    return (
        <div className={`col-md-4`}>
            <div class="card p-3" >
                <div class="card-body">
                    {/* <div className="d-flex mb-4"> */}
                        <img src={doctor.img} alt="" className="img-fluid me-4" />
                        <div>
                            <h6 className="fw-bold">{doctor.name}</h6>
                            <p style={{ color: '#B4B4B4' }}>{doctor.date}</p>
                        </div>
                    {/* </div> */}

                    
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;