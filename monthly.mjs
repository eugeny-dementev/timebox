/**
 * @param splitType: day | week - how planning section should be split, by 30 days or by 4 weeks
 */
export function getMonthlyDoc(splitType, cellSize = 9.5) {
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
  if (splitType == 'week') {
    drawPlanningSections(79, tpby + cellSize, 59, planningSectionHeight, 2, 2, cellSize);
  } else if (splitType == 'day') {
    drawPlanningSections(79, tpby + cellSize, 59, planningSectionHeight, 2, 15, cellSize);
  }

  return doc;
}

function drawPlanningSections(x, y, w, h, cols, rows, cellSize) {
  doc.rect(x, y, w, h); // Table rectangle

  const columnWidth = w / cols;

  // Draw planning section vertical separation lines
  for (let i = 1; i < cols; i++) {
    doc.line(
      x + i * columnWidth,
      tpby + cellSize,
      x + i * columnWidth,
      tpby + cellSize + h,
    );
  }

  const rowHeight = h / rows;

  // Draw planning section horizontal separation lines
  for (let j = 1; j < rows; j++) {
    doc.line(
      x,
      tpby + cellSize + j * rowHeight,
      x + w,
      tpby + cellSize + j * rowHeight,
    );
  }

  const dotsColumns = Math.ceil(w / cols / (cellSize / 2));
  const dotsRows = Math.ceil(h / rows / (cellSize / 2));

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      drawDots(
        x + columnWidth * i,
        y + rowHeight * j,
        columnWidth,
        rowHeight,
        dotsColumns,
        dotsRows,
      );
    }
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
