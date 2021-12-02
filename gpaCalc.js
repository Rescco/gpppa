


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
    if (isNaN(sumAllHours)) sumAllHours = 0;
    document.getElementById('tHour').innerHTML = '<h3 class="lead "> مجموع الساعات : ' + sumAllHours + '</h3>'

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
    if (isNaN(semesterGpa)) semesterGpa = 0;




    ///////////////////////////////////////////

    sumPoints = cla(points);
    sumHours = countHours();
    culmutivrGpa = sumPoints / sumHours;
    if (isNaN(culmutivrGpa)) culmutivrGpa = 0;

    document.getElementById("semGpa").innerHTML = '<h3 id="semGpa" class="lead "> معدلك الفصلي : ' + semesterGpa.toFixed(2) + '</h3>';
    document.getElementById('sumPoint').innerHTML = '<h3 id="sumPoint" class="lead ">عدد النقاط :' + sumPoints + '</h3>';
    document.getElementById('culmGpa').innerHTML = '<h3 id="culmGpa" class="lead ">معدلك التراكمي :' + culmutivrGpa.toFixed(2) + '</h3>'


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

function removeRow() {

    var row = table.deleteRow(-1);
    count--;

}







