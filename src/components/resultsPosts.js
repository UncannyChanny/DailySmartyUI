import React, { Component } from 'react';

import { connect } from 'react-redux';

class ResultsPosts extends Component {
    render() {
        return (
            <ul className='results-posts'>
                <div className='results-posts_wrapper'>
                    <div className='results-posts_posts'>
                        RESULTS GO HERE
                    </div>
                </div>
            </ul>            
        )
    }
}

function mapStateToProps(state) {
    return (
        state
    )
}

export default connect(mapStateToProps)(ResultsPosts);