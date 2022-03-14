import React from 'react';
import { Container } from 'react-bootstrap';
import tratment from '../../../images/treatment.png'

const Exceptional = () => {
    return (
        <section className="mb-5" style={{ height: ''}}>
            <Container>
                <div className="row d-flex align-items-center">
                    <div className="col-md-5">
                        <img src={tratment} alt="" className="img-fluid " />
                    </div>

                    <div className="col-md-7">
                        <h2 className="mb-4">Exceptional Dental <br /> Care, on Your Terms</h2>
                        <p className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero totam quasi, harum labore earum quisquam pariatur aliquam voluptates commodi vero accusantium dignissimos similique, deserunt, accusamus atque repudiandae qui quae voluptatem asperiores sed iure molestias? Commodi placeat incidunt obcaecati dolore animi eos laborum aliquam nesciunt, dolores repudiandae voluptatibus nihil rem autem distinctio cum ad numquam quidem harum consectetur, eaque atque!</p>
                        <button className="btn btn-info text-white w-25 my-5">Learn More</button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Exceptional;