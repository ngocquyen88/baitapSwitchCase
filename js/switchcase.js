function tinhSoNgay(){
    let thang=parseInt(document.getElementById("month").value);
    if(thang>0 && thang <=12) {
        switch (thang) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById("display").innerHTML = "Tháng " + thang + " có 31 ngày<br/>";
                break;
            case 2:
                document.getElementById("display").innerHTML = "Tháng " + thang + " có 28 ngày<br/>";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById("display").innerHTML = "Tháng " + thang + " có 30 ngày<br/>";
                break;
        }
    }
    else {
        document.getElementById("display").innerHTML="Bạn nhập sai tháng!!!"
    }
}