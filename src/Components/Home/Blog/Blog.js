import React from 'react';
import { Container } from 'react-bootstrap';
import BlogDetails from '../BlogDetails/BlogDetails';
import doctor1 from '../../../images/people-1.png';

const Blog = () => {

    const blogData = [
        {
            name: 'Dr. John Smith',
            img: doctor1,
            title: 'The tooth cancer is taking challange',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt deleniti magnam aut! Laboriosam, quidem impedit.',
            date: '23 April, 2021'
        },
        {
            name: 'Dr. John Smith',
            img: doctor1,
            title: 'The tooth cancer is taking challange',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt deleniti magnam aut! Laboriosam, quidem impedit.',
            date: '23 April, 2021'
        },
        {
            name: 'Dr. John Smith',
            img: doctor1,
            title: 'The tooth cancer is taking challange',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt deleniti magnam aut! Laboriosam, quidem impedit.',
            date: '23 April, 2021'
        },
    ];


    return (
        <section className="my-5" style={{ height: "450px" }}>
            <Container>
                <div className="text-center mb-5">
                    <h5 className="text-info">OUR BLOG</h5>
                    <h2>From Our Blog News</h2>
                </div>
                <div className="testimonial-card">
                    <Container className="row m-auto">
                        {
                            blogData.map(blog => <BlogDetails blog={blog} />)
                        }
                    </Container>
                </div>
            </Container>
        </section>
    );
};

export default Blog;