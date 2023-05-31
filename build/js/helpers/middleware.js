const{validationResult:validationResult}=require("express-validator");module.exports={handleErrors:(e,t)=>async(r,s,a)=>{const i=validationResult(r);if(!i.isEmpty()){let a={};return t&&(a=await t(r)),s.send(e({errors:i,...a}))}a()}};
//# sourceMappingURL=middleware.js.map
