// src/components/userflow/Shared/InvoiceGenerator.tsx
import React from 'react';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

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

    // Header
    doc.setFillColor(primary[0], primary[1], primary[2]);
    doc.roundedRect(32, 32, 531, 86, 8, 8, 'S');
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
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('Training includes access to R&D facility, expert faculty guidance, and course materials.', 48, endY + 16);
    doc.text('Please make payment within 7 days of receiving this invoice.', 48, endY + 30);
    doc.text('For queries, contact info@udayaqua.com.', 48, endY + 44);

    doc.save(`Invoice-${invoiceData.invoiceNumber}.pdf`);
  };

  return (
    <Button
      variant="contained"
      startIcon={<Download />}
      onClick={generateInvoicePDF}
      sx={{
        backgroundColor: '#1976d2',
        color: 'white',
        '&:hover': {
          backgroundColor: '#1565c0',
        },
      }}
    >
      Download Invoice
    </Button>
  );
};

export default InvoiceGenerator;
