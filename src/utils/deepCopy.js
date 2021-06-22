//封装一个深拷贝的函数
export default function deepCopy(source){
  //1.判断如果是数组，创建一个空数组，如果是对象，创建一个对象，其他直接返回
  if(Object.prototype.toString.call(source).slice(8,-1) === "Array"){
      var res = [];
  }else if(Object.prototype.toString.call(source).slice(8,-1) ==="Object"){
      var res = {}
  }else{
      return source;
  }


  //2.循环赋值
  for(var key in source){
      if(Object.prototype.toString.call(source[key]).slice(8,-1)==="Array"||"Object"){
          res[key] = deepCopy(source[key]);
      }else{
          res[key] = source[key]; 
      }
    
  }
  return res;
}
