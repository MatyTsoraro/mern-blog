import ReactQuill from "react-quill";
import React from "react";
import PropTypes from 'prop-types';

function Editor({value, onChange}){
    const  modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            ['clean']
        ]
    };
    return(
        <ReactQuill value={value} onChange={onChange} modules={modules} />
    );
}

Editor.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Editor;
