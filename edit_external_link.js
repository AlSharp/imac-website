document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll("a[href='https://imacdemolive.ngrok.io']");
  for (const element of elements) {
    element.target = '_blank'
  }
});