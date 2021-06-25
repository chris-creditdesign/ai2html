/// <reference types="types-for-adobe/Illustrator/2015.3"/>

const myDocument: Document = app.activeDocument;
const myLayer: Layer = myDocument.layers.add();

myLayer.name = "Test layer added!";
