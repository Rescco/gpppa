let totalHousrs = 0;
let dgrees = [90, 99, 80, 88, 80];
let units = [4, 3, 2, 4, 3,];
let totalDgree = 0;
let counter = 1;
let points = 0
let gpa = 0;
let grade = "";
let Cumgrade = "";
let cumHours = 141;
let cumGpa = 4.10;
let cumPoint = cumGpa * cumHours;
numberOfCourses = dgrees.length;
let newGrade = "";
/////////////////////////////////////////////////////// START HERE ///////////////////////////////////////////////////

for (i = 0; i < dgrees.length; i++) {
    //console.log("  | " + units[i]);
    //تحويل القيمة من %100 الى 5
    if (dgrees[i] >= 95) {
        dgrees[i] = 5;
    } else if (dgrees[i] >= 90) {
        dgrees[i] = 4.75;
    } else if (dgrees[i] >= 85) {
        dgrees[i] = 4.5;
    } else if (dgrees[i] >= 80) {
        dgrees[i] = 4;
    } else if (dgrees[i] >= 75) {
        dgrees[i] = 3.5;
    } else if (dgrees[i] >= 70) {
        dgrees[i] = 3;
    } else if (dgrees[i] >= 65) {
        dgrees[i] = 2.5;
    } else if (dgrees[i] >= 60) {
        dgrees[i] = 2;
    } else {
        dgrees[i] = 1;
    }
    // جمع كل الساعات بمتغير 
    totalHousrs += units[i];

    // 
    points += dgrees[i] * units[i];
    // Calculate GPA for this semster
    gpa = points / totalHousrs;


    gradeing(gpa, grade);

    console.log(`The ${counter}course dgree : ${dgrees[i]} and course unit : ${units[i]} `);
    counter++;
}

// Return grade as -- | String | 
function gradeing(g, de) {

    if (g >= 4.75) {
        de = "Exceptional";
    }
    else if (g >= 4.5) {
        de = "Excellent";
    }
    else if (g >= 4) {
        de = "Superior";
    }
    else if (g >= 3.5) {
        de = "Very Good";
    }
    else if (g >= 3.0) {
        de = "Above Average";
    }
    else if (g >= 2.5) {

        de = "Good";
    }
    else if (g >= 2.0) {
        de = "Good";
    }
    else {
        de = "ما يدخلك بيتكم ";
    }

    return de;
}
let newCgpa = (points + cumPoint) / (totalHousrs + cumHours);
//طباعة عدد الساعات 
console.log("------------------------------------------------------------------------------")
console.log(`The number of courses  : ${numberOfCourses} \nThe total hours: ${totalHousrs}`);
// نقاط الترم الحالي 
console.log("------------------------------------------------------------------------------")
console.log(`the current points = ${points}`)
//عدد النقاط الحالي 
console.log("------------------------------------------------------------------------------")
console.log(`the cumulative points : ${cumPoint}`);
// المغدل التراكمي الحالي 
console.log("------------------------------------------------------------------------------");
console.log(`Your cumulative GPA : ${cumGpa} |  ${gradeing(cumGpa, Cumgrade)}`);
// معدل هذا الفصل
console.log("------------------------------------------------------------------------------");
console.log(`Your GPA : ${gpa} |  ${gradeing(gpa, grade)}`);
// المعدل التراكمي الجديد 
console.log("------------------------------------------------------------------------------")
console.log(`Your new cumulative GPA : ${newCgpa} |  ${gradeing(newCgpa, newGrade)}`);

