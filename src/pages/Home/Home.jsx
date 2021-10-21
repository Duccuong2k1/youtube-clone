import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CategoriesBar, Video } from '../../components'

const Home = () => {
    return (
        <Container>
            <CategoriesBar />
            <Row>
                {
                    [...new Array(20)].map(() => (
                        <Col lg={3} md={4} sm={2} key={Math.random()}>
                            <Video />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Home
