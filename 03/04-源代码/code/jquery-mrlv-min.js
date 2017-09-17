//定义一个方法，改变所有盒子的文字颜色；
    //方法绑定到jQuery对象的原型上；
$.prototype.changeColorBlue = function () {
    //谁调用，把谁转换成蓝色；
    this.css("color","blue");
}


$.changeColorRed = function (ele) {
    //参数是谁，把谁转换成红色；
    ele.css("color","red");
}