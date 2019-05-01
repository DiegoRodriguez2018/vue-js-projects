<template>
  <div>
    <h1 class="title">Picture upload</h1>
    <div class="preview-container">
      <input
        id="take-picture"
        type="file"
        accept="image/*"
        @change="fileUpload"
      />
      <div class="preview">
        <img id="show-picture" src="about:blank" alt />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    fileUpload: function(e) {
      const files = e.target.files
      if (files && files.length > 0) {
        const file = files[0]
        // Image reference
        const showPicture = document.querySelector('#show-picture')
        // Create ObjectURL
        const imgURL = window.URL.createObjectURL(file)
        // Set img src to ObjectURL
        showPicture.src = imgURL
        // For performance reasons, revoke used ObjectURLs
        URL.revokeObjectURL(imgURL)
      }
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
