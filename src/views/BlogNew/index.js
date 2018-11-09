import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MultiUploader from 'components/MultiUploader';
import QuillEditor from 'components/QuillEditor';
import PrimaryButton from 'components/PrimaryButton';

import {
  onDropFiles, handleEditorChange, handleChangeFoodName, onSubmit
} from './actions';

class BlogNewContainer extends Component {
  constructor(props) {
    super(props);

    this.handleFoodName = this.handleFoodName.bind(this)
    this.onEditorChange = this.onEditorChange.bind(this)
    this.onDrop = this.onDrop.bind(this);
    this.handleBackToIndex = this.handleBackToIndex.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  onDrop = (files) => {
    this.props.onDropFiles(files);
  }

  handleFoodName = (event) => {
    this.props.handleChangeFoodName(event.target.value);
  }

  onEditorChange = (value) => {
    this.props.handleEditorChange(value);
  }

  handleBackToIndex = () => {
    this.props.history.push('/');
  }

  submitData = () => {
    this.props.onSubmit();
  }

  render() {
    const { editorHtml, files } = this.props;

    return (
      <div className="blog-new-container">
        <header className="container-header">
          <h1>New Blog</h1>
        </header>
        <hr />
        <div className="back-to-index" >
          <PrimaryButton title="Back" background="#cecece" color="#000" padding="5px 10px"
            action={this.handleBackToIndex} />
        </div>
        <div className="new-form" >
          <div className="image-uploader" >
            <MultiUploader id='food-imgs' files={files} onDrop={this.onDrop} />
          </div>
          <input className="food-name-input" placeholder="Enter food name" onChange={this.handleFoodName}/>
          <QuillEditor placeholder='Enter news content here...' theme='snow'
            onChange={this.onEditorChange} value={editorHtml} />
          <PrimaryButton title="Submit" background="#009933" color="#fff" padding="5px 50px"
            action={this.submitData} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodName: state.blogNewReducer.foodName,
  files: state.blogNewReducer.files,
  editorHtml: state.blogNewReducer.editorHtml
});

 const mapDispatchToProps = dispatch => bindActionCreators({
  onDropFiles, handleChangeFoodName, handleEditorChange, onSubmit
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlogNewContainer));
