<template>
    <div>
        <h2>类型转换主要包括两种：隐式转换 和 强制类型转换</h2>
        <div>
            <h4>一、隐式转换</h4>
            <Alert>1、数字字符串加数字，数字隐式转换为字符串；</Alert>
            console.log(20+'20');   //2020  <br>
            console.log('20'+20);   //2020
            <br>
            <Alert>2、数字字符串与数字做非加法运算，字符串隐式转换为数字；</Alert>
            console.log('20'-10);   //10 <br>
            console.log(10*'10');   //100 <br>
            console.log(10/'2');    //5
        </div>

        <div>
            <h4>二、强制类型转化</h4>
            <Alert>1、parseInt()  将小数字符串、整数字符串或者小数转换为整数；</Alert>
            <h4>（1）整数字符串转换为整数；</h4>
            <img src="../../../../assets/images/parseInt1.png" alt="">
            <h4>（2）小数字符串转换为整数；</h4>
            <img src="../../../../assets/images/parseInt2.png" alt=""> 
            <h4>（3）小数转换为整数；</h4>
            <img src="../../../../assets/images/parseInt3.png" alt="">

            <Alert>2、parseFloat()  将小数字符串转换为小数；</Alert>
            <img src="../../../../assets/images/parseFloat.png" alt="">
            <Alert>3、</Alert>
        </div>
        
        <div>
            <h4>三、字符串拼接</h4>
            <ul>
                <li>字符串拼接使用的符号： +(加号)</li>
                <li>字符串用引号引起来，单引号不做要求</li>
                <li>变量名不能用引号</li>
            </ul>
            例如："我的名字"+name+"，谢谢"

        </div>
    </div>
</template>

<script>
    export default{
        name: 'TypeChange', 
    }
</script>