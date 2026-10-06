/**
  * @returns object: jsPDF doc instance 
  */
export function prepareDoc({ format = "a5" } = {}) {
  let JSPDF = null;

  try {
    JSPDF = jsPDF; // global
  } catch (e) {
    JSPDF = jspdf.jsPDF; // global
  }

  var doc = new JSPDF({
    format,
    orientation: "portrait",
    unit: "mm",
  });

  doc.setFontSize(10);

  return doc;
}

/**
 * Draw an existing A5 pattern once, or twice at actual size on portrait A4.
 * @param {(doc: object) => void} drawPattern
 * @param {"a5-single" | "a4-double"} [pageLayout="a5-single"]
 */
export function preparePlannerDoc(drawPattern, pageLayout = "a5-single") {
  if (pageLayout !== "a5-single" && pageLayout !== "a4-double") {
    throw new RangeError(`Unsupported page layout: ${pageLayout}`);
  }

  const a5Doc = prepareDoc();
  if (pageLayout === "a5-single") {
    drawPattern(a5Doc);
    return a5Doc;
  }

  const doc = prepareDoc({ format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const halfHeight = doc.internal.pageSize.getHeight() / 2;
  const halfPadding = (halfHeight - a5Doc.internal.pageSize.getWidth()) / 2;
  const lineWidth = doc.getLineWidth();

  doc.advancedAPI(() => {
    // Advanced coordinates are millimeters; reapply the physical stroke width.
    doc.setLineWidth(lineWidth);
    for (let half = 0; half < 2; half++) {
      doc.saveGraphicsState();
      try {
        // Clockwise rotation: (x, y) -> (pageWidth - y, halfOffset + x).
        doc.setCurrentTransformationMatrix(
          new doc.Matrix(0, 1, -1, 0, pageWidth, half * halfHeight + halfPadding),
        );
        drawPattern(doc);
      } finally {
        doc.restoreGraphicsState();
      }
    }
  });

  doc.saveGraphicsState();
  try {
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.15);
    doc.setLineDashPattern([2, 2], 0);
    doc.line(10, halfHeight, pageWidth - 10, halfHeight, "S");
  } finally {
    doc.restoreGraphicsState();
    // jsPDF caches stroke settings separately from the PDF graphics state.
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(lineWidth);
    doc.setLineDashPattern([], 0);
  }

  return doc;
}
