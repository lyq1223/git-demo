let template = "我是{{name}},年龄{{age}},性别{{sex}}"; //代编译的模板

let date = {
  name: "蔡徐坤",
  age: 18,
};

function render(template, date) {
  const reg = /\{\{(\w+)\}\}/;
  if (reg.test(template)) {
    //是否需要编译
    // exec()方法是 vue 源码里模板编译用的正则方法
    const key = reg.exec(template)[1];
    // console.log(key);
    template = template.replace(reg, date[key]);
    return render(template, date); //递归
  }
  return template;
  //用什么方法？
  // 正则+replace{{}}
  // 1.{{?}+}
  // 2. $1  date[key]
  // 3. replace 替换
}
console.log(render(template, date));
