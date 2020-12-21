import React, { useState } from 'react';

import './pdf.css';

export default function toolbar() {

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