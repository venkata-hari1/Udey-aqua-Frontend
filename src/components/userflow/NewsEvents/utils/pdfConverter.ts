// PDF conversion utility for news images
import jsPDF from 'jspdf';

export interface PDFConversionOptions {
  title?: string;
  author?: string;
  date?: string;
  description?: string;
  body?: string[];
  imageUrl: string;
  filename?: string;
}

export const convertImageToPDF = async (options: PDFConversionOptions): Promise<void> => {
  try {
    const {
      title = 'News Article',
      author = '',
      date = '',
      description = '',
      body = [],
      imageUrl,
      filename = 'news-article.pdf'
    } = options;

    // Create new PDF document with better text rendering
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (margin * 2);
    
    // Set better text rendering options
    pdf.setProperties({
      title: title,
      subject: 'News Article',
      author: author || 'Uday Aqua',
      creator: 'Uday Aqua News System'
    });

    // Load and add image first (at the top)
    let currentY = margin;
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
      });

      // Calculate image dimensions to fit on page
      const maxImageWidth = contentWidth;
      const maxImageHeight = 200; // Reasonable height for image
      
      let imageWidth = img.width;
      let imageHeight = img.height;
      
      // Scale image to fit
      if (imageWidth > maxImageWidth) {
        const ratio = maxImageWidth / imageWidth;
        imageWidth = maxImageWidth;
        imageHeight = imageHeight * ratio;
      }
      
      if (imageHeight > maxImageHeight) {
        const ratio = maxImageHeight / imageHeight;
        imageHeight = maxImageHeight;
        imageWidth = imageWidth * ratio;
      }

      // Add image to PDF at the top
      pdf.addImage(img, 'JPEG', margin, currentY, imageWidth, imageHeight);
      currentY += imageHeight + 15; // Space after image
      
    } catch (imageError) {
      console.error('Error loading image:', imageError);
      // Add fallback text if image fails to load
      pdf.setFontSize(12);
      pdf.text('Image could not be loaded for PDF conversion', margin, currentY);
      currentY += 20;
    }

    // Add title
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    const splitTitle = pdf.splitTextToSize(title, contentWidth);
    pdf.text(splitTitle, margin, currentY);
    currentY += splitTitle.length * 6 + 15; // Consistent line height

    // Add date and author
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    if (date) {
      pdf.text(`Date: ${date}`, margin, currentY);
      currentY += 7;
    }
    if (author) {
      pdf.text(`Author: ${author}`, margin, currentY);
      currentY += 7;
    }

    // Add description
    if (description) {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Description:', margin, currentY);
      currentY += 8;
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      const cleanDescription = description.trim().replace(/\s+/g, ' ');
      const splitDescription = pdf.splitTextToSize(cleanDescription, contentWidth);
      pdf.text(splitDescription, margin, currentY);
      currentY += splitDescription.length * 4.5 + 15; // Consistent line height
    }

    // Add body content (full article text)
    if (body && body.length > 0) {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Article Content:', margin, currentY);
      currentY += 8;
      
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      
      body.forEach((paragraph) => {
        if (paragraph.trim()) {
          // Clean the paragraph text
          const cleanParagraph = paragraph.trim().replace(/\s+/g, ' ');
          const splitParagraph = pdf.splitTextToSize(cleanParagraph, contentWidth);
          
          // Render each line with consistent spacing
          splitParagraph.forEach((line: string) => {
            if (currentY > pageHeight - 40) {
              pdf.addPage();
              currentY = margin;
            }
            pdf.text(line, margin, currentY);
            currentY += 4.5; // Fixed line height
          });
          
          // Add space between paragraphs
          currentY += 8;
        }
      });
    }

    // Save the PDF
    pdf.save(filename);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
};

export const downloadImageAsPDF = async (imageUrl: string, title: string): Promise<void> => {
  await convertImageToPDF({
    imageUrl,
    title,
    filename: `${title.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.pdf`
  });
};
