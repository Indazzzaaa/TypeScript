1. Let say we have calculate tax function in js file and we want to use in ts file.Usually our ts compiler will throw error , but once `"allowJs": true,`  then everything will be fine.
2. Let say we enable basic type checking in js by `"checkJs": true,` , now our file is giving lot's of error , now we can silent those error by typing this in first line of file `\\@ts-nocheck`
3. Using jsdoc we can provide types information to typscript compiler.eg. 2_js_doc.js
4. We have another way of defining the types information by using declaration of type defination file.2_js_doc.d.ts `make sure file name  should be same`. // note typescript compiler will only able to figure out what we have exported here
5. Using 3-party library , `npm i lodash`  and `npm i -D @types/lodash`
