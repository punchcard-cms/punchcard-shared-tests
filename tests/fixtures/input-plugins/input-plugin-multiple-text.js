const validation = require('./lib/validation.js');

module.exports = {
  name: 'Email',
  description: 'Make sure email is good to go',
  validation: {
    emailValidation: validation,
    textValidation: validation,
  },
  inputs: {
    email: {
      validation: {
        function: 'emailValidation',
        on: 'blur',
      },
      label: 'Email',
      placeholder: 'Email',
      type: 'text',
      settings: {
        empty: false,
      },
    },
    text: {
      validation: {
        function: 'textValidation',
        on: 'blur',
      },
      label: 'Text',
      placeholder: 'Text',
      type: 'text',
      settings: {
        empty: false,
      },
    },
  },
  html: '<label for="{{email.id}}">{{email.label}}<input type="{{email.type}}" id="{{email.id}}" name="{{email.name}}" value="{{email.value}}" placeholder="{{email.placeholder}}" /></label><label for="{{text.id}}">{{text.label}}<input type="{{text.type}}" id="{{text.id}}" name="{{text.name}}" value="{{text.value}}" placeholder="{{text.placeholder}}" /></label>',
};
