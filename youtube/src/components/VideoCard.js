import React from 'react'
import { formatDistanceToNow } from 'date-fns';

const VideoCard = ({info}) => {
  
  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnail } = snippet;

   console.log(info);

   const formatViews = (num) => {
    if(num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    else if(num>=1000 && num<1000000){
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
   }

   const formatTime = (time) => {
    return formatDistanceToNow(new Date(time), { addSuffix: true });
   }

   const formattedView = formatViews(info.statistics.viewCount);
   const formattedTime = formatTime(info.snippet.publishedAt);

  return (
    <div>
      <div className="flex-row p-4 m-2 border-0 w-[22rem] h-[21rem] rounded-md">
        <img className="rounded-lg w-[25rem] h-[12rem]" src={info.snippet.thumbnails.high.url} alt="videocard"/>
        <span className='text-base font-bold'>{info.snippet.title}</span>
        <div><span className='text-sm'>{info.snippet.channelTitle}</span></div>
        <div className="flex-col text-sm">
          <span>{formattedView} views · </span>
          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
    
  )
}

export default VideoCard