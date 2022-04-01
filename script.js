// creating a regular expression
var reg = /[a-z]/gi;
var reg2 = new RegExp(/[a-z]/, 'gi');

//
const inputs = document.querySelectorAll('input');
console.log(inputs);

// regex patterns
const patterns = {
  telephone: /^\d{10}$/,
  username: /^[a-z\d]{5,10}$/i,
  password: /^[\w@-]{8,20}$/,
  profile: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

// validation function
function validate(field, regex) {
  console.log(field.value);
  console.log(regex);
  if (regex.test(field.value)) {
    field.classList = 'valid';
  } else {
    field.classList = 'invalid';
  }
}
//
inputs.forEach((input) => {
  console.log(input);
  input.addEventListener('keyup', (e) => {
    console.log(e.target.attributes.name.value); // name='tel'
    console.log(e.target.value); // value we put inside the field
    console.log(e.target); // element
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
