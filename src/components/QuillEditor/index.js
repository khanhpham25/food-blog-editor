import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './assets/editor.css';
import ImageResize from 'quill-image-resize-module';
import VideoResize from 'quill-video-resize-module';
import { ImageDrop } from 'quill-image-drop-module';

Quill.register('modules/ImageResize', ImageResize);
Quill.register('modules/VideoResize', VideoResize);
Quill.register('modules/imageDrop', ImageDrop);

export default class QuillEditor extends Component {
  render() {
    return (
      <div>
        <ReactQuill
          theme={this.props.theme}
          onChange={this.props.onChange}
          value={this.props.value}
          modules={QuillEditor.modules}
          formats={QuillEditor.formats}
          bounds={'.app'}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}

QuillEditor.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  },
  ImageResize: {
    modules: ['Resize', 'DisplaySize', 'Toolbar']
  },
  VideoResize: {
    modules: ['Resize', 'DisplaySize', 'Toolbar']
  },
  imageDrop: true
}

QuillEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]
