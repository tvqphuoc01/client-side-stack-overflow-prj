import React, { useEffect, useRef, useState } from "react";


function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
        // Configure the URL to the upload script in your back-end here!
        return new MyUploadAdapter(loader);
    };
}
class MyUploadAdapter {
    loader;
    xhr;
    constructor(loader) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file
            .then(file => new Promise((resolve, reject) => {
                this._initRequest();
                this._initListeners(resolve, reject, file);
                this._sendRequest(file);
            }));
    }
    _sendRequest(file) {
        // Prepare the form data.
        const data = new FormData();

        data.append('file', file);
        data.append("upload_preset", "stack-overflow-clone-question");

        // Important note: This is the right place to implement security mechanisms
        // like authentication and CSRF protection. For instance, you can use
        // XMLHttpRequest.setRequestHeader() to set the request headers containing
        // the CSRF token generated earlier by your application.

        // Send the request.
        this.xhr.send(data);
    }

    _initListeners(resolve, reject, file) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = `Couldn't upload file: ${file.name}.`;

        xhr.addEventListener('error', () => reject(genericErrorText));
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener('load', () => {
            const response = xhr.response;

            // This example assumes the XHR server's "response" object will come with
            // an "error" which has its own "message" that can be passed to reject()
            // in the upload promise.
            //
            // Your integration may handle upload errors in a different way so make sure
            // it is done properly. The reject() function must be called when the upload fails.
            if (!response || response.error) {
                return reject(response && response.error ? response.error.message : genericErrorText);
            }

            // If the upload is successful, resolve the upload promise with an object containing
            // at least the "default" URL, pointing to the image on the server.
            // This URL will be used to display the image in the content. Learn more in the
            // UploadAdapter#upload documentation.
            console.log(response)
            resolve({
                default: response.url
            });
        });

        // Upload progress when it is supported. The file loader has the #uploadTotal and #uploaded
        // properties which are used e.g. to display the upload progress bar in the editor
        // user interface.
        if (xhr.upload) {
            xhr.upload.addEventListener('progress', evt => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }

    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();
        // Note that your request may look different. It is up to you and your editor
        // integration to choose the right communication channel. This example uses
        // a POST request with JSON as a data structure but your configuration
        // could be different.
        xhr.open('POST', "https://api.cloudinary.com/v1_1/n3-udpt/image/upload", true);

        xhr.responseType = 'json';
    }
}

function Editor({ onChange, editorLoaded, name, value }) {
    const editorRef = useRef();
    const [editor, setEditor] = useState();
    const { CKEditor, ClassicEditor } = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        };
    }, []);

    useEffect(() => {
        if (editor) {
            editor.editing.view.change((writer) => {
                writer.setStyle("min-height", "128px", editor.editing.view.document.getRoot());
                writer.setStyle("max-height", "none", editor.editing.view.document.getRoot());
                // writer.setStyle("max-width", maxWidth, editor.editing.view.document.getRoot());
                // writer.setStyle("width", "100%", editor.editing.view.document.getRoot());
                // writer.setStyle("border-radius", "inherit", editor.editing.view.document.getRoot());
                // writer.setStyle(
                //   "background-color",
                //   props.readonly ? "transparent" : "white",
                //   editor.editing.view.document.getRoot()
                // );
                // if (props.noBorder) {
                //   writer.setStyle("border", "0 !important", editor.editing.view.document.getRoot());
                //   writer.setStyle("box-shadow", "none !important", editor.editing.view.document.getRoot());
                // } else {
                //   writer.setStyle(
                //     "box-shadow",
                //     "0 0 4px 1px rgba(0, 0, 0, 0.08)",
                //     editor.editing.view.document.getRoot()
                //   );
                // }
            });
            // editor.isReadOnly = props.readonly;
        }
    }, [editor]);

    return (
        <div>
            {editorLoaded ? (
                <CKEditor
                    type=""
                    name={name}
                    config={{
                        extraPlugins: [MyCustomUploadAdapterPlugin],
                    }}
                    editor={ClassicEditor}
                    data={value}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        // console.log({ event, editor, data })
                        onChange(data);
                    }}
                    onReady={(editor) => {
                        setEditor(editor)
                    }}
                />
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Editor;
