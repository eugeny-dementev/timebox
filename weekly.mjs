export function getWeeklyDoc() {
  let JSPDF = null;
  try {
    JSPDF = jsPDF;
  } catch (e) {
    JSPDF = jspdf.jsPDF;
  }

  var doc = new JSPDF({
    format: "a5",
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
    if (hour == 0) return "00";
    if (hour < 10) return `0${hour}`;
    return `${hour}`;
  }

  /**
   * @param cols: amount of columns to fit in x axis, 5 columns means 4 lines of dots
   * @param rows: amount of dots to fit y axis, 2 rows means single line of dots
   */
  function drawDots(x, y, w, h, cols, rows) {
    const columnWidth = w / cols;
    const rowHeight = h / rows;

    doc.setDrawColor(200, 200, 200); // grey color for dots

    for (let c = 1; c < cols; c++) {
      for (let r = 1; r < rows; r++) {
        doc.rect(x + columnWidth * c, y + rowHeight * r, 0.2, 0.2);
      }
    }

    doc.setDrawColor(0, 0, 0); // return black color
  }

  doc.text(10, 12, "Top priorities:");
  doc.rect(10, tpby, 59, ch * 3);
  doc.line(10, tpby + ch, 69, tpby + ch);
  doc.line(10, tpby + ch * 2, 69, tpby + ch * 2);

  doc.text(10, 49, "Brain dump:");
  doc.rect(10, tpby + ch * 4, 59, ch * 16);

  // Draw dots in brain dump area
  doc.setDrawColor(200, 200, 200);
  const bdcolumns = Math.ceil(59 / (ch / 2));
  const bdrows = Math.ceil((ch * 16) / (ch / 2));

  drawDots(10, tpby + ch * 4, 59, ch * 16, bdcolumns, bdrows);

  doc.setDrawColor(0, 0, 0);

  doc.text(79, 12, "Week:");
  doc.line(89, 15, 138, 15);

  // Days of the week
  const weekHeight = ch * 19;
  const weekDayHeight = weekHeight / 7;
  const weeklyDayColumns = Math.ceil(59 / (ch / 2));
  const weeklyDayRows = Math.ceil(weekDayHeight / (ch / 2));

  doc.rect(79, tpby + ch, 59, weekHeight); // Table rectangle

  // Draw cells in the actions table
  for (let i = 1; i < 7; i++) {
    const y = tpby + ch + weekDayHeight * i;
    doc.setDrawColor(0, 0, 0);
    doc.line(79, y, 79 + 59, y);

    // Draw dots in week day area
    if (i == 1) {
      drawDots(
        79,
        y - weekDayHeight,
        59,
        weekDayHeight,
        weeklyDayColumns,
        weeklyDayRows,
      );
    }
    drawDots(79, y, 59, weekDayHeight, weeklyDayColumns, weeklyDayRows);
  }

  return doc;
}
