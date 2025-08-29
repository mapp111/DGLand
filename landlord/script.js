import ScheduleData from './services/form-parser.js';
import { validateData } from './utils/validator.js';

const quill = new Quill('#input');

document.getElementById('paste-button').addEventListener('click', () => {
  navigator.clipboard.readText().then(text => {
    quill.setText(text);
  });
});

document.getElementById('send-button').addEventListener('click', () => {
  const text = quill.getText();
  const scheduleData = ScheduleData.parseFormData(text);
  //validate data
  if (!validateData(scheduleData)) return;
  console.log(scheduleData);
});