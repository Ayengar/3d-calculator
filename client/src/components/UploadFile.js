import Uppy from '@uppy/core'
import { Dashboard } from '@uppy/react'
// import GoogleDrive from '@uppy/google-drive'
import XHRUpload from '@uppy/xhr-upload'

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

const uppy = new Uppy({
        id:'UploadFile',
        restrictions: {
            maxFileSize: 104857600,
            maxNumberOfFiles: 1,
            allowedFileTypes: ['.stl'],
        },
    })    
        .use(XHRUpload, {
            id:'XHRUpload',
            endpoint:'http://localhost:9000/uploads',
            fieldName: 'model',
            formData: true,
        })

const UploadFile = ({setUploadStatus, setModelPath}) => {

    uppy.on('complete', (result) => {
        console.log('Upload complete! File uploaded: ', result.successful);
        setUploadStatus(true);
    })
    
    uppy.on('upload-success', (file, response) => {
        const httpBody = response.body;  
        setModelPath('http://localhost:9000/' + httpBody.filename);
    })
    
    
    return(
        <Dashboard uppy={uppy} plugins={[]} />
    )
}

export default UploadFile;

