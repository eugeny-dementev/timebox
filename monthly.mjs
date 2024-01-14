/**
 * @param splitType: day | week - how planning section should be split, by 30 days or by 4 weeks
 */
export function getMonthlyDoc(splitType) {
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

  const cellSize = 9.25; // Cell size
  const tpby = 15; // Top priorities block Y starting coordinate

  doc.text(10, 12, "Top priorities:");
  doc.rect(10, tpby, 59, cellSize * 3);
  doc.line(10, tpby + cellSize, 69, tpby + cellSize);
  doc.line(10, tpby + cellSize * 2, 69, tpby + cellSize * 2);

  doc.text(10, 49, "Brain dump:");
  doc.rect(10, tpby + cellSize * 4, 59, cellSize * 16);

  // Draw dots in brain dump area
  const bdcolumns = Math.ceil(59 / (cellSize / 2));
  const bdrows = Math.ceil((cellSize * 16) / (cellSize / 2));
  drawDots(10, tpby + cellSize * 4, 59, cellSize * 16, bdcolumns, bdrows);

  doc.text(79, 12, "Month:");
  doc.line(91, 15, 138, 15);

  // Draw planning section
  const planningSectionHeight = cellSize * 19;
  drawPlanningSections(79, tpby + cellSize, 59, planningSectionHeight, 2, 2);

  return doc;
}

function drawPlanningSections(x, y, w, h, cols, rows) {
  doc.rect(x, y, w, h); // Table rectangle

  const weeklyDayColumns = Math.ceil(59 / 2 / (cellSize / 2));
  const weeklyDayRows = 3;
  doc.line(x, y, x + w, y);

  const sectionColumnWidth = w / cols;

  // Draw planning section vertical separation lines
  for (let i = 1; i < cols; i++) {
    doc.line(
      x + i * sectionColumnWidth,
      tpby + cellSize,
      x + i * sectionColumnWidth,
      tpby + cellSize + planningSectionHeight,
    );
  }

  const sectionRowHeight = h / rows;

  // Draw planning section horizontal separation lines
  for (let j = 1; j < rows; j++) {
    doc.line(
      x,
      tpby + cellSize + j * sectionRowHeight,
      x + w,
      tpby + cellSize + j * sectionRowHeight,
    );
  }

  // Draw cells in the actions table
  for (let i = 1; i <= 15; i++) {
    const y = tpby + cellSize + weekDayHeight * i;
    doc.setDrawColor(0, 0, 0);
    doc.line(x, y, x + w, y);

    drawDots(
      x,
      y - weekDayHeight,
      w / 2,
      weekDayHeight,
      weeklyDayColumns,
      weeklyDayRows,
    );
    drawDots(
      x + w / 2,
      y - weekDayHeight,
      w / 2,
      weekDayHeight,
      weeklyDayColumns,
      weeklyDayRows,
    );
  }
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
