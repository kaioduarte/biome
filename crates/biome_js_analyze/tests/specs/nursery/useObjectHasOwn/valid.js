Object;
Object(obj, prop);
Object.hasOwnProperty;
Object.hasOwnProperty(prop);
hasOwnProperty(obj, prop);
foo.hasOwnProperty(prop);
foo.hasOwnProperty(obj, prop);
Object.hasOwnProperty.call;
foo.Object.hasOwnProperty.call(obj, prop);
foo.hasOwnProperty.call(obj, prop);
Object.foo.call(obj, prop);
Object.hasOwnProperty.foo(obj, prop);
Object.hasOwnProperty.call.foo(obj, prop);
Object[hasOwnProperty].call(obj, prop);
Object.hasOwnProperty[call](obj, prop);
Object.foo.hasOwnProperty.call(obj, prop);
({});
({}(obj, prop));
({}.hasOwnProperty);
({}.hasOwnProperty(prop));
({}.hasOwnProperty(obj, prop));
({}.hasOwnProperty.call);
({}.foo.call(obj, prop));
({}.hasOwnProperty.foo(obj, prop));
({}[hasOwnProperty].call(obj, prop));
({}.hasOwnProperty[call](obj, prop));
({}).hasOwnProperty[call](object, property);
({})[hasOwnProperty].call(object, property);
({ foo }.hasOwnProperty.call(obj, prop)); // object literal should be empty

let obj = {};
Object.hasOwn(obj,"");

const hasProperty = Object.hasOwn(object, property);
