<template>
  <div>
    <h1 class="title">Picture upload</h1>
    <div class="preview-container">
      <input
        id="take-picture"
        type="file"
        accept="image/*"
        @change="selectFile"
      />
      <div class="preview">
        <img id="show-picture" src="about:blank" alt />
      </div>
      <form @submit="fileUpload">
        <button id="file-upload-button">Upload</button>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import FormData from 'form-data';

export default {
  data() {
    return {
      file: null
    };
  },
  methods: {
    selectFile: function(e) {
      const files = e.target.files
      if (files && files.length > 0) {
        const file = files[0];
        this.file = file;
        // Image reference
        const showPicture = document.querySelector('#show-picture');
        // Create ObjectURL
        const imgURL = window.URL.createObjectURL(file);
        // Set img src to ObjectURL
        showPicture.src = imgURL;
        // For performance reasons, revoke used ObjectURLs
      }
    },
    fileUpload: function(e){
      e.preventDefault();

      /*
      TODO: change key format to userID_filename
      */
     
     const url = "http://localhost:3500/file-upload"
     
     const file = this.file;
     const fileName = file.name;
     const fileType = file.type;
     
     const config = {
       params: {
         Key : fileName, 
          ContentType :  "image/jpeg"
        }
      }
      
      axios.get(url, config)
      .then (res=> {
        const { data: {putUrl} } = res;
        const s3PutUrl = putUrl;  
        const options = {
          headers: {
            'Content-Type': "image/jpeg"
          }
        }

        axios.put(s3PutUrl, file, options)
        .then (res => {
          console.log("Success")
          console.log('res',': ', res);
        })
        .catch(err=>{
          console.log('err', err)
        })
      })

    }
  }
}
</script>

<style>
.title{
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
}
.preview-container{
  display:flex;
  flex-direction: column;
  align-items: center;
}
.preview{ 
  margin-top: 1rem;
  border: 1px grey solid;
  border-radius: 2%;
  width: 70vh;
  height: 70vh;
}

#show-picture{
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
}
</style>
