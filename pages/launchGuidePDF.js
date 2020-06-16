import React, { Component } from 'react';
import pdfjsLib from 'pdfjs';

export default class launchGuidePDF extends Component {
    render() {
        var myState = {
            pdf: null,
            currentPage: 1,
            zoom: 1
        }
     
        pdfjsLib.getDocument('./LaunchGuide.pdf').then((pdf) => {
     
            myState.pdf = pdf;
            render();
    
        });
        function render() {
            myState.pdf.getPage(myState.currentPage).then((page) => {
                var canvas = document.getElementById("pdf_renderer");
                var ctx = canvas.getContext('2d');
                
                var viewport = page.getViewport(myState.zoom);
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                page.render({
                    canvasContext: ctx,
                    viewport: viewport
                });
        
            });
        }
    
        // Go previous button
        function prevButton(e) {
                    if(myState.pdf == null || myState.currentPage == 1) return;
                    myState.currentPage -= 1;
                    document.getElementById("current_page").value = myState.currentPage;
                    render();
                };
        
        function nextButton(e) {
                    if(myState.pdf == null || myState.currentPage == myState.pdf._pdfInfo.numPages) {
                    return;
                    } else {
                    myState.currentPage += 1;
                    document.getElementById("current_page").value = myState.currentPage;
                    render();
                    }
        }
        // Zoom Functionality
        function zoomIn() {
                    if(myState.pdf == null) return;
                    myState.zoom += 0.5;
                    render();
                };
        
        function zoomOut() {
                    if(myState.pdf == null) return;
                    myState.zoom -= 0.5;
                    render();
                };
        return (
            <React.Fragment>
                <div id="navigation_controls" style="text-align: center;">
                    <button id="go_previous" onclick={prevButton()}>Previous</button>
                    <input id="current_page" value="1" type="number"/>
                    <button id="go_next" onclick={nextButton()}>Next</button>
                </div>
                <div id="my_pdf_viewer">
                    <div id="canvas_container">
                        <canvas id="pdf_renderer"></canvas>
                    </div>
                </div>
                <div id="zoom_controls" style="text-align: center;"> 
                    <button id="zoom_in" onclick={zoomIn()}>+</button>
                    <button id="zoom_out" onclick={zoomOut()}>-</button>
                    <p style="font-size: small; font-family: Arial, Helvetica, sans-serif;">Zoom</p>
                </div>
        </React.Fragment>
        )
    }
}
