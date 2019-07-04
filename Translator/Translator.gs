function onOpen() {
  var ui = DocumentApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Custom Menu')
      .addItem('First item', 'openDialog')
      .addSeparator()
      .addToUi();
}



function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('sidebar');
  DocumentApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showModalDialog(html, 'Dialog title');
}

function Translator() {
  //Make File Browser that Gets (only Documetns) and  get Document ID
  var Doc= DocumentApp.openById("1o758CnxfYVP31I3j2ZKVATADQHhyvkSB8uTDCDcG2DA");
  var OrigDocName = Doc.getName();
  var body= Doc.getBody();
  var Kannada = LanguageApp.translate(body.getText(), 'en', 'kn')
  var NewDOc =DocumentApp.create('Translated '+ OrigDocName + ' Kannada')
  var NewDOcbody  = NewDOc.getBody();
  NewDOcbody.setText(Kannada);
}

//algo
//Create Addon menu When CLiked opens Html Modal
//Create HTML Modal
//Create File Browse Dialog that Browse the Drive to open Google Document(ie Source Folder)
//Create a File Browse Dialog that SAves the translated File in the Folder(ie Dest Folder)
//Create Button when Clicked it Should Convert and Save and Show Dialog
