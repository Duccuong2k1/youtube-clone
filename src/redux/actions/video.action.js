import request from '../../api'
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionTypes"
export const getPopularVideos = () => async dispatch => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST
        });
        const { data } = await request('/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'VN',
                maxResults: 20,
                pageToken: '',
            }
        });
        // console.log(data);
        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
            },
        })
    } catch (error) {
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message,
        })
        console.error(error)
    }
}