// src/components/userflow/Shared/InvoiceExample.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import InvoiceGenerator from './InvoiceGenerator';

const InvoiceExample: React.FC = () => {
  // Sample invoice data - this would typically come from props or state
  const sampleInvoiceData = {
    customerName: "Ravi Kumar",
    customerAddress: "123 Sea View Road, Chennai, Tamil Nadu, 600001",
    customerPhone: "+91 97911 99909",
    invoiceNumber: "UDAY-INV-1025",
    invoiceDate: "19 Sept, 2025",
    dueDate: "26 Sept, 2025",
    subject: "Training Program - CBARS (Recirculating Aquaculture System)",
    itemDetail: "Training Program - CBARS (Culture: Recirculating Aquaculture System, Location: Armoor, Duration: 3 Days)",
    quantity: 1,
    rate: 10000,
    subtotal: 10000,
    gstRate: 18,
    gstAmount: 1800,
    total: 11800,
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Invoice Generator Example
      </Typography>
      <InvoiceGenerator invoiceData={sampleInvoiceData} />
    </Box>
  );
};

export default InvoiceExample;
