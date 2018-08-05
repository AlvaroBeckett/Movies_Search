import React from 'react'

class NewsRow extends React.Component {
    render() {
        return <div className='row' style={{ marginTop: '1.5em' }} key={this.props.post.id}>
            <div className='col-md-4'>
                <img alt='picture' style={{ padding: '.5em' }} src={this.props.post.picture_src} />
            </div>
            <div className='col-md-8'>
                {this.props.post.title}
                <p className='text-left'>{this.props.post.story_text}</p>
            </div>
        </div>  
    }
}

export default NewsRow