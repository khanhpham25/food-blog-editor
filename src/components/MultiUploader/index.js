import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';
import './assets/multi_uploader.css';

export default class MultiUploader extends Component {
  render() {
    let height = this.props.height || '110';
    let width = this.props.width || '100%';

    const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100,
    };

    return (
      <div className='multi-uploader' >
        <Dropzone
          accept="image/*"
          maxSize={25000000}
          onDrop={this.props.onDrop}
          style={{ width: width, height: height,
            borderWidth: '2px', borderColor: 'rgb(102, 102, 102)',
            borderStyle: 'dashed', borderRadius: '5px' }}
        >
          <i className="material-icons main-icon" style={{fontSize: '48px', color: '#2583a8'}} >camera_alt</i>
          <p>Upload food images.</p>
        </Dropzone>
        {this.props.files.length > 0 &&
          <Fragment>
            <h3>Previews</h3>
            {this.props.files.map((file, index) => (
              <img
                alt={file.name}
                key={index}
                src={file.preview}
                style={previewStyle}
              />
            ))}
          </Fragment>
        }
      </div>
    );
  }
}
