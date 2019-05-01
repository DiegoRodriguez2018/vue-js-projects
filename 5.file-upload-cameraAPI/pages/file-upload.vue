<template>
  <div>
    <h1>Take a pic</h1>
    <input
      id="take-picture"
      type="file"
      accept="image/*"
      @change="fileUpload"
    />
    <div class="preview">
      Preview:
      <img id="show-picture" src="about:blank" alt />
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
