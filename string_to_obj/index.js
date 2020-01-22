const {deepStrictEqual} = require('assert');

function toObj(str, value) {
  let intermediate = {};
  const keys = str.split('.').reverse();
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    if (index === 0) {
      intermediate = {
        [key]: value
      }
    } else {
      intermediate = {
        [key]: intermediate
      };
    }
  }
  return intermediate;
}

deepStrictEqual(toObj('foo.bar.baz', 10), {
  foo: {
    bar: {
      baz: 10
    }
  }
}, 'string was not parsed correctly');
