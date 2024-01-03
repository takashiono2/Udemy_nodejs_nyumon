import _ from "lodash";
const original = { prop: { nested: "value" } };
const cloned = _.cloneDeep(original);
cloned.prop.nested = "new value";

console.log(original, cloned);
