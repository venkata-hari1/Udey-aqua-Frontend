import React, { useState } from 'react';
import { Box, IconButton, Tooltip, CircularProgress } from '@mui/material';
import { convertImageToPDF } from '../utils/pdfConverter';
import pdfIcon from '../../../../assets/icons/pdf.svg';

interface PDFButtonProps {
  imageUrl: string;
  title: string;
  author?: string;
  date?: string;
  description?: string;
  body?: string[];
  className?: string;
}

const PDFButton: React.FC<PDFButtonProps> = ({
  imageUrl,
  title,
  author,
  date,
  description,
  body,
  className
}) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePDFGeneration = async () => {
    try {
      setIsGenerating(true);
      await convertImageToPDF({
        imageUrl,
        title,
        author,
        date,
        description,
        body,
        filename: `${title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.pdf`
      });
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Tooltip title="Convert to PDF" arrow>
      <Box className={className}>
        <IconButton
          onClick={handlePDFGeneration}
          disabled={isGenerating}
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            zIndex: 10,
            width: 40,
            height: 40,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          {isGenerating ? (
            <CircularProgress size={20} />
          ) : (
            <img
              src={pdfIcon}
              alt="PDF"
              style={{ width: 20, height: 20 }}
            />
          )}
        </IconButton>
      </Box>
    </Tooltip>
  );
};

export default PDFButton;
