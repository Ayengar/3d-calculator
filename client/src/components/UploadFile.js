import Uppy from '@uppy/core'
import { Dashboard } from '@uppy/react'
import GoogleDrive from '@uppy/google-drive'
import XHRUpload from '@uppy/xhr-upload'

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'


const uppy = new Uppy({
        id:'UploadFile',
    })    
        .use(XHRUpload, {
            id:'XHRUpload',
            endpoint:'http://localhost:9000/uploads',
            fieldName: 'model',
            formData: true,
        })

uppy.on('complete', (result) => {
    console.log('Upload complete! File uploaded: ', result.successful)
})

const UploadFile = () => {
    return(
        <Dashboard uppy={uppy} plugins={[]} />
    )
}

export default UploadFile;