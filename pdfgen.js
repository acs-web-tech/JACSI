
module.exports.pdfgen=async function (companyname,paymentDetails,res){
let PDFDocument = require("pdf-lib").PDFDocument
let fs = require("fs")
let bytes = fs.readFile("invoice.pdf",async function(err,data){
   const pdfDoc = await PDFDocument.load(data)
    

    const pages = pdfDoc.getPages()
const firstPage = pages[0]
const { width, height } = firstPage.getSize()


firstPage.drawText(companyname, {
  x: 220,
  y:   700,
  size: 12,
})
firstPage.drawText(paymentDetails.id, {
  x: 220,
  y:  665,
  size: 12,
})
firstPage.drawText(paymentDetails.title, {
  x: 220,
  y:  630,
  size: 12,
})
firstPage.drawText(paymentDetails.amount, {
  x: 220,
  y:  605,
  size: 12,
})
firstPage.drawText(paymentDetails.total_taxes, {
  x: 220,
  y:  570,
  size: 12,
})
firstPage.drawText(paymentDetails.fees, {
  x: 220,
  y:  538,
  size: 12,
})

firstPage.drawText(paymentDetails.instrument_type, {
  x: 220,
  y:  503,
  size: 12,
})
firstPage.drawText(paymentDetails.phone, {
  x: 220,
  y:  468,
  size: 12,
})
firstPage.drawText(paymentDetails.name, {
  x: 220,
  y:  441,
  size: 12,
})



const pdfBytes = await pdfDoc.save()
fs.writeFile("INVOICE2.pdf",pdfBytes,function(err2,data2){
	res.sendFile(__dirname+"/INVOICE2.pdf")
})
})

}