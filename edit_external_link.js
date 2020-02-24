document.addEventListener('DOMContentLoaded', function() {
  console.log('edit external links');
  const elements = document.querySelectorAll("a[href='https://imacdemolive.ngrok.io']");
  for (const element of elements) {
    element.target = '_blank'
  }
});