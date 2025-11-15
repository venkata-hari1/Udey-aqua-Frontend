// src/components/userflow/Shared/InvoiceGenerator.tsx
import React from 'react';
import { Button, IconButton, Box } from '@mui/material';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import Icon from '../../../assets/Logo (2).png'
import pdfButton from '../../../assets/PDF.png';

interface InvoiceData {
  customerName: string;
  customerAddress: string;
  customerPhone: string;
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  subject: string;
  itemDetail: string;
  quantity: number;
  rate: number;
  subtotal: number;
  gstRate: number;
  gstAmount: number;
  total: number;
}

const InvoiceGenerator: React.FC<{ invoiceData: InvoiceData }> = ({ invoiceData }) => {
  const generateInvoicePDF = () => {
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const primary: [number, number, number] = [25, 118, 210];

    const x = 20;   // left position
    const Y = 50;   // top position
    const w = 400;  // width of background box
    const h = 400; 
   {/*

    // Header
    doc.setFillColor(240, 240, 240);
    doc.rect(x, Y, w, h, "FD");
    doc.setFillColor(primary[0], primary[1], primary[2]);
    //doc.roundedRect(32, 32, 531, 86, 8, 8, 'S');
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.text('Uday Aqua', 64, 74);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(['info@udayaqua.com', 'hello@email.com', '+91 98765 43210'], 64, 92);
    doc.text(['Business address', 'Hyderabad, Telangana, India', 'GSTIN: 36ABCDE1234F1Z5'], 400, 64);

    // Invoice meta boxes
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    const leftX = 48; const rightX = 322; let y = 150;
    doc.text('Invoice To', leftX, y);
    doc.setFont('helvetica', 'bold');
    doc.text(invoiceData.customerName || '-', leftX, y + 18);
    doc.setFont('helvetica', 'normal');
    doc.text((invoiceData.customerAddress || '-'), leftX, y + 36, { maxWidth: 250 });
    if (invoiceData.customerPhone) doc.text(invoiceData.customerPhone, leftX, y + 54);

    doc.setFont('helvetica', 'normal');
    doc.text('Invoice number', rightX, y);
    doc.setFont('helvetica', 'bold');
    doc.text(invoiceData.invoiceNumber, rightX, y + 18);
    doc.setFont('helvetica', 'normal');
    doc.text('Invoice date', rightX, y + 42);
    doc.text(invoiceData.invoiceDate, rightX + 100, y + 42);
    doc.text('Due date', rightX, y + 60);
    doc.text(invoiceData.dueDate, rightX + 100, y + 60);

    // Amount (INR)
    doc.setFillColor(240, 247, 255);
    doc.roundedRect(480, 132, 83, 40, 6, 6, 'F');
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text(`₹${(invoiceData.total || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 488, 158);
    doc.setTextColor(0,0,0);

    // Subject
    y = 228;
    doc.setFont('helvetica', 'bold');
    doc.text('Subject', leftX, y);
    doc.setFont('helvetica', 'normal');
    doc.text(invoiceData.subject || '-', leftX, y + 18);

    // Items table
    autoTable(doc as any, {
      startY: 280,
      head: [[ 'ITEM DETAIL', 'QTY', 'RATE', 'AMOUNT' ]],
      body: [[
        invoiceData.itemDetail || '-',
        String(invoiceData.quantity || 1),
        `₹${(invoiceData.rate || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,
        `₹${(invoiceData.subtotal || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`
      ]],
      headStyles: { fillColor: primary },
      styles: { font: 'helvetica', fontSize: 10, cellPadding: 6 },
      columnStyles: { 1: { halign: 'center' }, 2: { halign: 'right' }, 3: { halign: 'right' } },
      margin: { left: 32, right: 32 }
    });

    // Summary
    const tableY = (doc as any).lastAutoTable.finalY + 10;
    autoTable(doc as any, {
      startY: tableY,
      body: [
        [ 'Subtotal', `₹${(invoiceData.subtotal || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}` ],
        [ `GST (${invoiceData.gstRate || 18}%)`, `₹${(invoiceData.gstAmount || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}` ],
        [ 'Total', `₹${(invoiceData.total || 0).toLocaleString('en-IN', { minimumFractionDigits: 2 })}` ]
      ],
      styles: { font: 'helvetica', fontSize: 10, cellPadding: 6 },
      columnStyles: { 0: { halign: 'left' }, 1: { halign: 'right' } },
      margin: { left: 370, right: 32 }
    });

    // Footer note
    const endY = (doc as any).lastAutoTable.finalY + 24;
    doc.setFont('helvetica', 'bold');
    doc.text('Thanks for the business.', 48, endY);
    doc.setFillColor(240, 240, 240);
    doc.rect(x, Y, w, h, "FD");
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Training includes access to R&D facility, expert faculty guidance, and course materials.', 48, endY + 16);
    doc.text('Please make payment within 7 days of receiving this invoice.', 48, endY + 30);
    doc.text('For queries, contact info@udayaqua.com.', 48, endY + 44);
*/}
   // doc.save(`Invoice-${invoiceData.invoiceNumber}.pdf`);
   //Full page colour
    doc.setFillColor(240, 240, 240);
    doc.rect(0, 0, 595.28, 841.89, "F");

    //header
    doc.addImage(
      Icon, 
      "PNG", 
      30,         
      20,         
      80,   
      80   
    
    )
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont('DM Serif Display', 'bold');
    doc.setFontSize(24);
    doc.text('Uday Aqua', 130, 40);
    doc.setTextColor(94, 100, 112);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(['info@udayaqua.com', 'hello@email.com', '+91 98765 43210'], 140, 60);
    doc.text(['Business address', 'Hyderabad, Telangana, India', 'GSTIN: 36ABCDE1234F1Z5'], 400,70);

    //main content
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(23, 118, 550,520,10,10, "F");
      //invoive
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(94, 100, 112);
      const leftX = 48; const rightX = 222; let y = 150;
      doc.text('Invoice To', leftX, y);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0,0,0);
      doc.text(invoiceData.customerName || '-', leftX, y + 18);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(94, 100, 112);
      doc.text((invoiceData.customerAddress || '-'), leftX, y + 36, { maxWidth: 150 });
      if (invoiceData.customerPhone) doc.text(invoiceData.customerPhone, leftX, y + 64);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(94, 100, 112);
      doc.text('Invoice number', rightX, y);
      doc.setFont('helvetica', 'bold');
       doc.setTextColor(0,0,0);
      doc.text(invoiceData.invoiceNumber, rightX, y + 18);


      // Amount (INR)
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(94, 100, 112);
      doc.text('Invoice of (USD)', 550-70,y,{align: "left"});
      doc.setTextColor(primary[0], primary[1], primary[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.text(`₹${(invoiceData.total).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 550-90, 178,{align: "left"});
      //doc.setTextColor(0,0,0);

      //subject
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(94, 100, 112);
      doc.text('Subject', leftX, y+100);
      doc.setTextColor(0,0,0);
      doc.text(invoiceData.subject, leftX,y+118, { maxWidth: 150 });
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(94, 100, 112);
      doc.text('Invoice date', rightX, y+100);
       doc.setTextColor(0,0,0);
      doc.text(invoiceData.invoiceDate, rightX,y+118);
      doc.setTextColor(94, 100, 112);
      doc.text('Due date',550-70, y+100,{align: "left"});
       doc.setTextColor(0,0,0);
      doc.text(invoiceData.dueDate, 550-70, y + 118,{align: "left"});

      //table
      const tablerowstart=48,tablerowend=550,tableY=300
      doc.setDrawColor(94, 100, 112);
      doc.setLineWidth(1);
      doc.line(tablerowstart, tableY, tablerowend, tableY);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(94, 100, 112);
      doc.text('ITEM DETAILS', tablerowstart+10, tableY+15,{maxWidth:200});
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(94, 100, 112);
      doc.text('QTY', tablerowstart+210, tableY+15,{maxWidth:50});
      doc.setTextColor(94, 100, 112);
      doc.text('RATE',tablerowstart+300, tableY+15,{maxWidth:100});
      doc.setTextColor(94, 100, 112);
      doc.text('AMOUNT',550-70, tableY+15,{maxWidth:100,align: "left"});

      doc.setDrawColor(94, 100, 112);
      doc.setLineWidth(1);
      doc.line(tablerowstart, tableY+30, tablerowend, tableY+30);


      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(0,0,0);
      doc.text(invoiceData.subject, tablerowstart+10, tableY+45,{maxWidth:200});
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0,0,0);
      doc.text(invoiceData.quantity.toString(), tablerowstart+210, tableY+45,{maxWidth:50});
      doc.setTextColor(0,0,0);
      doc.text(`₹${(invoiceData.rate).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,tablerowstart+300, tableY+45,{maxWidth:100});
      doc.setTextColor(0,0,0);
      doc.text(`₹${(invoiceData.rate).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,550-70, tableY+45,{maxWidth:2100,align: "left"});
      doc.line(tablerowstart, tableY+90, tablerowend, tableY+90);

    //subtotal area

      const staringpoint=tablerowstart+210,endpoint=tableY+115

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(0,0,0);
      doc.text('Subtotal', staringpoint+10, endpoint,{maxWidth:200});
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0,0,0);
      doc.text(`₹${(invoiceData.subtotal).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 550-70, endpoint,{maxWidth:50,align: "left"});

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(0,0,0);
      doc.text('GST(18%)', staringpoint+10, endpoint+15,{maxWidth:200});
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(0,0,0);
      doc.text(`₹${(invoiceData.gstRate).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,550-70, endpoint+15,{maxWidth:50,align: "left"});

      doc.line(staringpoint, endpoint+30, tablerowend, endpoint+30);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(0,0,0);
      doc.text('Total', staringpoint+10, endpoint+45,{maxWidth:200});
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0,0,0);
      doc.text(`₹${(invoiceData.total).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`, 550-50, endpoint+45,{maxWidth:50, align: "right" });
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(0,0,0);
      doc.text('Thanks for the business.', tablerowstart, endpoint+200);
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(0,0,0);
    doc.text('Training includes access to R&D facility, expert faculty guidance, and course materials.', tablerowstart, endpoint+250);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(0,0,0);
    doc.text('Please make payment within 7 days of receiving this invoice.', tablerowstart, endpoint+260);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(0,0,0);
    doc.text('For queries, contact info@udayaqua.com.', tablerowstart, endpoint+270);



    const pdfBlob = doc.output("blob");
    const pdfURL = URL.createObjectURL(pdfBlob);
    window.open(pdfURL);
  };

  return (
    <Button
      variant="contained"
      startIcon={
        <IconButton>
          <Box component="img"
            src={pdfButton} alt="pdfButton" width='15px' height='19px'
          />
        </IconButton>
      }
      onClick={generateInvoicePDF}
      sx={{
        backgroundColor: '#fff',
        color: '#1565c0',
        '&:hover': {
          backgroundColor: '#fff',
        },
        fontSize:'16px',
        fontWeight:500,
        textTransform:'none',
        fontFamily:'DM Serif Display',
        paddingY:0,
        borderRadius:'5px'
      }}
    >
      Download Invoice
    </Button>
  );
};

export default InvoiceGenerator;
