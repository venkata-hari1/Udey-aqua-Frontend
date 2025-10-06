// src/components/userflow/NewsEvents/components/PdfMark.tsx
import { Box, Tooltip } from '@mui/material';
import pdfIcon from '../../../../assets/icons/pdf_red.svg';
import { useState } from 'react';
import { convertImageToPDF, convertNewsImageToPDF, type NewsImageData } from '../../../../utils/pdfConverter';

interface PdfMarkProps {
  imageUrl: string;
  newsData?: NewsImageData;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  size?: 'small' | 'medium' | 'large';
}

const PdfMark: React.FC<PdfMarkProps> = ({ 
  imageUrl, 
  newsData, 
  position = 'top-right',
  size = 'medium'
}) => {
  const [isConverting, setIsConverting] = useState(false);

  const handlePdfConversion = async () => {
    if (isConverting) return;
    setIsConverting(true);
    try {
      if (newsData) {
        await convertNewsImageToPDF(newsData);
      } else {
        await convertImageToPDF(imageUrl, 'News Image');
      }
    } catch (error) {
      console.error('PDF conversion failed:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const getPositionStyles = () => {
    const baseStyles = {
      position: 'absolute' as const,
      zIndex: 10,
    };

    const sizeStyles = {
      small: { width: 32, height: 32 },
      medium: { width: 40, height: 40 },
      large: { width: 48, height: 48 },
    };

    const positionStyles = {
      'top-right': { top: 8, right: 8 },
      'top-left': { top: 8, left: 8 },
      'bottom-right': { bottom: 8, right: 8 },
      'bottom-left': { bottom: 8, left: 8 },
      'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...positionStyles[position],
    };
  };

  const sizePx = 36;

  return (
    <Tooltip title={isConverting ? "Generating PDF..." : "Convert to PDF"} arrow>
      <Box
        onClick={handlePdfConversion}
        sx={{
          ...getPositionStyles(),
          cursor: isConverting ? 'default' : 'pointer',
        }}
      >
        <img src={pdfIcon} alt="PDF" style={{ width: sizePx, height: sizePx, display: 'block'}} />
      </Box>
    </Tooltip>
  );
};

export default PdfMark;
