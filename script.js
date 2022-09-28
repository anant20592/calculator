console.log('Hello!');

//array of all keys of calculator
const keys = [
  { id: 1, type: 'clear-all', value: '0', desc: 'C' },
  { id: 2, type: 'bracket', value: 'open-bracket', desc: '( )' },
  { id: 3, type: 'operator', value: 'division', desc: '%' },
  { id: 4, type: 'clear', value: '0', desc: '<=' },

  { id: 5, type: 'number', value: 7, desc: '7' },
  { id: 6, type: 'number', value: 8, desc: '8' },
  { id: 7, type: 'number', value: 9, desc: '9' },
  { id: 8, type: 'operator', value: 'multiplication', desc: 'x' },

  { id: 9, type: 'number', value: '4', desc: '4' },
  { id: 10, type: 'number', value: '5', desc: '5' },
  { id: 11, type: 'number', value: '6', desc: '6' },
  { id: 12, type: 'operator', value: 'subtract', desc: '-' },

  { id: 13, type: 'number', value: '1', desc: '1' },
  { id: 14, type: 'number', value: '2', desc: '2' },
  { id: 15, type: 'number', value: '3', desc: '3' },
  { id: 16, type: 'operator', value: 'addition', desc: '+' },

  { id: 17, type: 'disabled', value: '4', desc: '' },
  { id: 18, type: 'number', value: '0', desc: '0' },
  { id: 19, type: 'disabled', value: 'decimal', desc: '.' },
  { id: 20, type: 'operator', value: 'equals', desc: '=' },
];

//creating nodes for each key in keypad

keys.map((cKey) => {
  const node = document.createElement('div');
  node.id = cKey.id;
  node.setAttribute('value', cKey.value);
  node.setAttribute('type', cKey.type);
  node.className = 'key';
  node.textContent = cKey.desc;
  node.setAttribute('disabled', cKey.type === 'disabled' ? true : false);
  document.getElementById('keypad').appendChild(node);
});

document.getElementById('keypad').addEventListener('click', (e) => {
  console.log(e.target.getAttributes);
});
function printKey(id, value) {
  console.log(id, value);
}
