const newObject = (object, key, valueKey) => object[key] = valueKey;

const object = {};

newObject(object, 'chave', 'valorChave');

console.log(object);
