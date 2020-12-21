import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import PdfHighlighting from './PdfHighlighting';
import './example.css';

export default function exampleReport() {

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    // <div className="App-header">
    <div className='container'  >
      <div className='row middle-xs' >
        <div className="col">
          {/* <div> */}
          <Document file="/files/High School Math.pdf" onLoadSuccess={onDocumentLoadSuccess} >
            {Array.from(new Array(numPages),
              (el, index) => (
                <Page size="A3" pageNumber={index + 1}
                  width={100} scale={10} alignment={'center'} className="page"
                />),
            )}
          </Document>
          {/* <div class="vl">
          </div> */}
          <PdfHighlighting />
        </div>
      </div>
    </div>
  );
}