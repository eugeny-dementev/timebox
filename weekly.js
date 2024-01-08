/*
 * Simple code made inside http://raw.githack.com/MrRio/jsPDF/master/
 * to generate clean pdf file for timebox weekly planning 
 * 
 * - Copy all the code
 * - Go to jsPDF Live Demo http://raw.githack.com/MrRio/jsPDF/master/ page
 * - Replace everything with copied code
 *
 * Adjust the variables if you need different day starting hour
 */

var doc = new jsPDF({
    format: 'a5',
});
doc.setFontSize(10);

const ch = 9.25; // Cell size
const tpby = 15; // Top priorities block Y starting coordinate 
let sh = 8; // Starting hour;


let nh = sh; // Next hour;
function getHour() {
    sh = nh;
    
    if (sh == 23) {
        nh = 0;
    } else {
        nh = sh + 1;
    }
    
    return sh;
}

function getHourStr(hour) {
  if (hour == 0) return '00';
  if (hour < 10) return `0${hour}`;
  return `${hour}`;
}

doc.text(10, 12, 'Top priorities:');
doc.rect(10, tpby, 59, ch * 3);
doc.line(10, tpby + ch, 69, tpby + ch);
doc.line(10, tpby + ch * 2, 69, tpby + ch * 2);

doc.text(10, 49, 'Brain dump:');
doc.rect(10, tpby + ch * 4, 59, ch * 16);

// Draw dots in brain dump area
doc.setDrawColor(200, 200, 200);
const bdcolumns = Math.ceil(59 / (ch / 2));
const bdcolw = 59 / bdcolumns;
const bdrows = Math.ceil(ch * 16 / (ch / 2));
for (let i = 1; i < bdcolumns; i++) {
    for (let j = 1; j < bdrows; j++) {
        doc.rect(10 + i*bdcolw, (tpby + ch * 4) + j*ch/2, 0.2, 0.2);
    }
}

doc.setDrawColor(0, 0, 0);

doc.text(79, 12, 'Date:');
doc.line(89, 15, 138, 15);

// Days of the week
const weekHeight = ch * 19;
const weekDayHeight = weekHeight / 7;
doc.rect(79, tpby + ch, 59, weekHeight); // Table rectangle

// Draw cells in the actions table
for (let i = 1; i <= 7; i++) {
    const y = tpby + ch + weekDayHeight * i;
    doc.setDrawColor(0, 0, 0);
    doc.line(79, y, 79 + 59 ,y);
    
    // Draw dots in brain dump area
    doc.setDrawColor(200, 200, 200);
    const weeklyDayColumns = Math.ceil(59 / (ch / 2));
    const weeklyDayColumnWight = 59 / weeklyDayColumns;
    const weeklyDayRows = 5;
    const weeklyDayRowHeight = weekDayHeight / weeklyDayRows;
    for (let i2 = 1; i2 < weeklyDayColumns; i2++) {
        for (let j = 1; j < weeklyDayRows; j++) {
            doc.rect(
                79 + i2*weeklyDayColumnWight,
                (y - weekDayHeight) + j*weeklyDayRowHeight,
                0.2,
                0.2
            );
        }
    }
}


