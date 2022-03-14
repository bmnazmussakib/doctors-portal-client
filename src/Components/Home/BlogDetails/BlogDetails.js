import React from 'react';
import './BlogDetails.css';
import comma from '../../../images/comma.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'



const BlogDetails = ({ blog }) => {
    return (
        <div className={`col-md-4`}>
            <div class="card p-3" >
                <div class="card-body">
                    <div className="d-flex mb-4">
                        <img src={blog.img} alt="" className="img-fluid w-25 me-4" />
                        <div>
                            <h6 className="fw-bold">{blog.name}</h6>
                            <p style={{ color: '#B4B4B4' }}>{blog.date}</p>
                        </div>
                    </div>

                    <h6 class="card-title fw-bold mb-3">{blog.title}</h6>
                    <p style={{ color: '#B4B4B4' }} class="card-text">{blog.description}</p>
                    <div class="overlay p-5">
                        <h5 className=" text-white" style={{  }}>{blog.name}</h5>
                        <p className="text-white mb-3" style={{ color: '#B4B4B4' }}>{blog.date}</p>
                        <h4 className="card-title mb-3 text-white">{blog.title}</h4>
                        {/* <img src={comma} alt="" className='img-fluid w-50 ' style={{ color: 'white' }} /> */}
                        <a href="#"><FontAwesomeIcon icon={faLongArrowAltRight} className="text-white fs-1 mt-5" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;