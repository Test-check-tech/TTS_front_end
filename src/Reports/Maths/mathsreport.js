import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PdfHighlighting from './PdfHighlighting';
import './pdf.css';

export default function Maths() {

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    // <div className="App-header">
    <div className='container' >
      <div className='row middle-xs' >
        <div className="col">
          {/* <div> */}
          <Document file="/files/High School Math.pdf" onLoadSuccess={onDocumentLoadSuccess} >
            {Array.from(new Array(numPages),
              (el, index) => (<Page size="A3" pageNumber={index + 1} />),
            )}
          </Document>
          <PdfHighlighting />
        </div>
      </div>
    </div>
  );
}