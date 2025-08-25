const quill = new Quill('#input');

document.getElementById('paste-button').addEventListener('click', () => {
  navigator.clipboard.readText().then(text => {
    quill.setText(text);
  });
});