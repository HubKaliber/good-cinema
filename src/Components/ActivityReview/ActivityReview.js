import React, {Component} from 'react';
import './ActivityReview.css';
import StarRatingComponent from 'react-star-rating-component';
import WatchlistButton from './../watchlistButton/WatchlistButton';


class ActivityReview extends Component{
    render(){
        return(

           
            <div className='flexbox ActivityReview'>
                <div >
                    <img src={this.props.review.poster_url} width='50'></img>
                </div>
                <div className='padding'>
                    <img className='circle' src={this.props.review.profile_url} width='40' height='40'></img>
                </div>
                <div className='flex-grow-1 flexbox-col'>
                    <div><StarRatingComponent
                        name='review-rating'
                        starCount={5}
                        value={this.props.review.stars} />
                    </div>
                    <div className='flex-grow-1'>
                        {this.props.review.review_text}
                    </div>
                    
                </div>  
                <div className='Watch-btn'>              
                    <div>
                        <WatchlistButton/>
                    </div>
                </div>
            
            </div>

        );

    }
}

export default ActivityReview;