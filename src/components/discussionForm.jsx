import React, { Component } from 'react'
import UserReviews from './reviewList'

export default class DiscussionForm extends React.Component {
    render() {
        return (
            <div>
                <div className="discussion row mt-5 p-4 bg-black text-white">
                    <h3>Discussion</h3>
                    <hr />
                    <form>
                        <input type="text" className="form-control-lg container-fluid text-center mb-4" placeholder="Enter a Username" />
                        <div class="md-form">
                            <textarea id="form16" className="md-textarea form-control-lg container-fluid text-center mb-4" placeholder="Start a Discussion" rows="3"></textarea>
                        </div>
                    </form>
                    <UserReviews/>                 
                </div>
            </div>
        )
    }
}