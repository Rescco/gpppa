


let tabel = document.querySelector('table');
let hour = document.getElementsByClassName('numberOfHours');
let dgree = document.getElementsByClassName('subjectRating')
/// حساب الساعات 
let totalHours = Number(0);// لتحويله الى رقم عشان اقدر اجمع 
totalHours = 0;
function countHours() {
    let cureentHours = document.getElementById('cHours').value;
    let totalHours = Number(0);// لتحويله الى رقم عشان اقدر اجمع 
    totalHours = 0;
    for (let index = 0; index < table.querySelectorAll("tbody tr").length; index++) {
        hour[index].value ?
            totalHours += parseInt(document.getElementsByClassName('numberOfHours')[index].value)
            : 0


    }


    let t = totalHours + cureentHours;
    let b = parseInt(cureentHours);
    let sumAllHours = NaN;
    sumAllHours = totalHours + b;
    if (isNaN(sumAllHours)) sumAllHours = "";
    document.getElementById('tHour').innerHTML = '<p " style="font-size: 19px;"> مجموع الساعات : ' + sumAllHours + '</p>'

    return sumAllHours;
}

// حساب عدد الدرجات الكلي 

function Calgrade() {
    let allHours = 0;
    let points = 0;
    let sumi = 0;
    let semesterGpa = NaN;
    let culmutivrGpa = NaN;
    let sumHours = NaN;
    let sumPoints = NaN;
    for (let i = 0; i < table.querySelectorAll("tbody tr").length; i++) {

        sumi = (dgree[i].value * hour[i].value);
        points = points + sumi;

        hour[i].value ?
            allHours += parseInt(hour[i].value)
            : 0


    }

    // حساب المعدل الفصلي 
    semesterGpa = (points / allHours);
    if (isNaN(semesterGpa)) semesterGpa = "";




    ///////////////////////////////////////////

    sumPoints = cla(points);
    sumHours = countHours();
    culmutivrGpa = sumPoints / sumHours;
    if (isNaN(culmutivrGpa)) culmutivrGpa = "";

    document.getElementById("semGpa").innerHTML = '<p id="semGpa"  style="font-size: 19px;"> معدلك الفصلي : ' + semesterGpa.toFixed(2) + '</p>';
    document.getElementById('sumPoint').innerHTML = '<p id="sumPoint"  style="font-size: 19px;">عدد النقاط :' + sumPoints + '</p>';
    document.getElementById('culmGpa').innerHTML = '<p id="culmGpa"  style="font-size: 19px;">معدلك التراكمي :' + culmutivrGpa.toFixed(2) + '</p>'


}



////حساب نقاط المعدل الحالي

function cla(a) {
    let currentPoints = NaN;
    let cureentGpa = document.getElementById('cGpa').value;
    let cureentHours = document.getElementById('cHours').value;


    currentPoints = cureentGpa * cureentHours;
    document.getElementById('nido').innerHTML = "النقاط الحالية " + currentPoints;

    return currentPoints + a;
}
// اضافة صف جديد
let count = 5;

function addRow() {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);


    cell1.innerHTML = '<th class="table lead text-danger">' + count + '</th>';
    cell2.innerHTML = '<input type="number" class="form-control   numberOfHours" oninput="countHours()" style="width: 90px;id="floatingHours" placeholder="الساعات">';
    cell3.innerHTML = '<select class="subjectRating form-control" style="width: 98px;"> <option value="">الدرجة</option>   < option value = 5 > A +| 95 - 100</ > <option value=4.75 > A | 90 - 94</option > <option value=4.5 > B + | 85 - 89</option > <option value=4 > B | 80 - 84</option > <option value=3.5 > C + | 75 - 79</option > <option value=3 > C | 70 - 74</option > <option value=2.5 > D + | 65 - 69</option > <option value=2 > D | 60 - 64</option > <option value=1 > F</option ></select > '

    count++;
}

// حذف صف جديد









