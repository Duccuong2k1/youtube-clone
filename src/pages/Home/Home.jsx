import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CategoriesBar, Video } from '../../components'
import { getPopularVideos } from '../../redux/actions/video.action';

const Home = () => {
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(getPopularVideos())
    },[dispatch])
    const {videos} = useSelector(state => state.homeVideo)
    // console.log(videos);
    return (
        <Container>
            <CategoriesBar />
            <Row>
                {
                    videos.map((video) => (
                        <Col lg={3} md={4} sm={2} key={video.id}>
                            <Video video={video} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Home
