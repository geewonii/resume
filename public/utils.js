

// 生成不重复随机数
// num, min, max  all Number
const createRandom = (num, min, max) => {
  const _list = [];

  const equality = (num = 1, min = 0, max = 10) => {
    let mums = Math.floor(Math.random() * (max - min + 1) + min);
    if(_list.some(val => val !== mums)) _list.push(mums)
    return _list.length !== num ? equality(num, min, max) : _list;
  }

  if(num <= 1) return Math.floor(Math.random() * (max - min + 1) + min);
  if(_list.length === 0) _list.push(Math.floor(Math.random() * (max - min + 1) + min));

  return equality(num, min, max)
}

// Cubic.easeOut动画算法
const cubicEaseOut = (t, b, c, d) => c * ((t = t/d - 1) * t * t + 1) + b;

export {
  createRandom,
  cubicEaseOut
}
