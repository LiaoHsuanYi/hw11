//1
function show()
{
    b = (parseFloat(a1.value) + parseFloat(a2.value) )/ parseFloat(a3.value);
    b4.value = b;
}

//2
function show1()
{
    if(a1.value < 60)
    {
        b1.value = "不及格";
    }
    else if(a1.value >= 60)
    {
        b1.value = "及格";
    }
}

//3
function css1()
{
    document.getElementById("a1").className = "s1";
    document.getElementById("a2").className = "s1";
    document.getElementById("a3").className = "s1";
    document.getElementById("a4").className = "s1";
}
function css2()
{
    document.getElementById("b1").className = "s2";
    document.getElementById("b2").className = "s2";
    document.getElementById("b3").className = "s2";
    document.getElementById("b4").className = "s2";
}
function css3()
{
    document.getElementById("c1").className = "s3";
    document.getElementById("c2").className = "s3";
    document.getElementById("c3").className = "s3";
    document.getElementById("c4").className = "s3";
}

//4
function compute()
{
    var money = 0;
    if(a1.checked == true)
        money += 500;
    if(a2.checked == true)
        money += 600;
    if(a3.checked == true)
        money += 700;
    if(b1.checked == true)
        money += 70;
    else if(b2.checked == true)
        money += 60;
    else if(b3.checked == true)
        money += 50;

    alert("總金額＝" + money);
}

//5
function change()
{
    document.getElementById("a1").style.backgroundColor = c1.value;
    document.getElementById("b1").style.backgroundColor = c1.value;
}

//6
function buy()
{
    a1 = document.getElementById("a1").value;
    a2 = document.getElementById("a2").value;
    a3 = document.getElementById("a3").value;
    a4 = document.getElementById("a4").value;
    document.getElementById("b1").innerHTML = "你的姓名是" + a1 + "，購買物品是" + a2 + "，地址是" + a3 + "，送貨日是" + a4;
}

//7
function select()
{
    a1 = document.getElementById("a1").value;
    a2 = document.getElementById("a2").value;
    a3 = document.getElementById("a3").value;
    document.getElementById("b1").innerHTML = "你就讀學校是" + a1 + "，科系是" + a2 + "，年級是" + a3;
}