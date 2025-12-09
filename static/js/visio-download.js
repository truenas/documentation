// Force download of Visio stencil files in Firefox and other browsers
document.addEventListener('DOMContentLoaded', function() {
  // Find all links with download attribute that point to .vssx or .vsdx files
  const visioLinks = document.querySelectorAll('a[download*=".vssx"], a[download*=".vsdx"]');

  visioLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Only use custom download for Firefox or if the browser isn't respecting download attribute
      const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

      if (isFirefox) {
        e.preventDefault();

        const url = this.href;
        const filename = this.getAttribute('download');

        // Fetch the file and create a blob to force download
        fetch(url)
          .then(response => response.blob())
          .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const tempLink = document.createElement('a');
            tempLink.style.display = 'none';
            tempLink.href = blobUrl;
            tempLink.download = filename;

            document.body.appendChild(tempLink);
            tempLink.click();

            // Clean up
            document.body.removeChild(tempLink);
            window.URL.revokeObjectURL(blobUrl);
          })
          .catch(error => {
            console.error('Error downloading file:', error);
            // Fallback to normal link behavior
            window.location.href = url;
          });
      }
    });
  });
});
