import React, { useEffect, useState } from 'react';
import request from '../../api';
import moment from 'moment';
import numeral from 'numeral';
import './_Video.scss';
import { IoEyeSharp } from "react-icons/io5";
export const Video = ({video}) => {

    const {
        id,
        snippet:{
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails:{medium}
        }
    } = video;

    const [views,setViews] = useState(null);
    const [duration,setDuration] = useState(null);
    const [channelIcon,setChannelIcon] = useState(null);

    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format('mm:ss')

    // load number view and day
    useEffect(() =>{
        const get_video_detail = async () =>{
            const {
                data:{items},

            } = await request('/videos',{
                params:{
                    part:'contentDetails,statistics',
                    id:id
                }
            });
            setDuration(items[0].contentDetails.duration);
            setViews(items[0].statistics.viewCount);
        }
        get_video_detail()
    },[id]);
    // load auth video
    useEffect(() =>{
        const get_channel_icon = async () =>{
            const {
                data:{items},

            } = await request('/channels',{
                params:{
                    part:'snippet',
                    id:channelId
                }
            });
            setChannelIcon(items[0].snippet.thumbnails.default);
            
        }
        get_channel_icon()
    },[channelId])

    return (
        <div className="video">
            <div className="video__top">
                <img src={medium.url} alt="" />
                <span>{_duration}</span>
            </div>
            <div className="video__title">
                <p>{title}</p>
            </div>
            <div className="video__detail">
                <span>
                    <IoEyeSharp />
                    {numeral(views).format("0.a")} view * 
                </span>
                <span>
                    {moment(publishedAt).fromNow()}
                </span>
            </div>
            <div className="video__channel">
                <img src={channelIcon?.url} alt="" />
                <p>{channelTitle}</p>
            </div>
        </div>
    )
}
