import React from 'react';

const TestimonialDetails = ({ testimonial }) => {
    return (
        <div className={`col-md-4`}>
            <div class="card p-3" >
                <div class="card-body">
                    <p class="card-text mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem qui sapiente repudiandae eaque maxime? Distinctio temporibus non sint illo tenetur vero, libero perferendis nesciunt aut, tempore consequatur nisi omnis eaque.</p>
                    <div className="d-flex">
                        <img src={testimonial.customerImg} alt="" className="img-fluid w-25 me-4"/>
                        <div>
                            <h6 style={{ color: "#0dcaf0"}} >{testimonial.customerName}</h6>
                            <p>{testimonial.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;