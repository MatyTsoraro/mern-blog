import React from 'react';
export default function Post(){
    return(
        <div className="post">
            <div className="image">
                <img src="https://techcrunch.com/wp-content/uploads/2023/06/CMC_6538.jpg?w=430&h=230&crop=1" alt="" />
            </div>
            <div className="texts">
                <h2>Putting the ‘Pro’ in Apple Vision Pro and other TC news</h2>
                <p className="info">
                    <a className="author">Maty Tsoraro</a>
                    <time>2023-06-13 22:44</time>
                </p>
                <p className="summary">At WWDC this week, Apple revealed its new Vision Pro headset, a platform it described as the advent of spatial computing</p>
            </div>
        </div>

    );
}

