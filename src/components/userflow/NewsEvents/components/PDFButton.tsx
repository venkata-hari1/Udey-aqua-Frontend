import React, { useState } from 'react';
import { Box, Tooltip, CircularProgress } from '@mui/material';
import { convertImageToPDF } from '../utils/pdfConverter';
import pdfIcon from '../../../../assets/icons/pdf_red.svg';

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
        <Box
          onClick={handlePDFGeneration}
          sx={{
            position: 'absolute',
            bottom: 8,
            left: 8,
            zIndex: 10,
            width: 36,
            height: 36,
            cursor: isGenerating ? 'default' : 'pointer'
          }}
        >
          {isGenerating ? (
            <CircularProgress size={20} />
          ) : (
            <img src={pdfIcon} alt="PDF" style={{ width: 36, height: 36, display: 'block' }} />
          )}
        </Box>
      </Box>
    </Tooltip>
  );
};

export default PDFButton;
