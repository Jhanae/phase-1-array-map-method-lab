const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (elem) => {
  return tutorials.map( sentence => {
    const word = sentence.split(' ');
    const cap = word.map( singleWord => singleWord.charAt(0).toUpperCase() + singleWord.slice(1) );
    const result = cap.join(' ');
    return result;
  });
}