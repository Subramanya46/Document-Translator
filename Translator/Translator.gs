//Write a Function to Get a Document by its Id 
//Translate the whole Document to Kannada
//Save the Transalted Content in New Docuemnt and Save it in the Same Folder of the Original Document
//SAve With Orign File Name with Kannada 
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
