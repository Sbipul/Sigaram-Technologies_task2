import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Home.css'
const Home = () => {

    const [countries,setCountries] = useState([])

    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-10-27&sortBy=publishedAt&apiKey=f93ad254764b45ac87183b6950ce414a')
        .then(res => res.json())
        .then(data => setCountries(data.articles))
    },[])
    return (
        <Container>
            <h3 className="text-center p-3 shadow-lg my-5">Here is all the car i have got instead of country.Total car :  {countries?.length}</h3>
            <Row xs={1} md={3} className="g-4">
                {
                    countries.map(country => <Col>
                        <div className="main p-2">
                            <h3 className="fw-bold">{country?.title}</h3>
                            <img src={country?.urlToImage} alt="Girl in a jacket" className="w-100" height="220"/>
                            <div className="sub bg-light p-2">
                                <p>{country?.description}</p>
                            </div>
                        </div>
                        
                    </Col>)  
                }
            </Row>
        </Container>
    );
};
export default Home;