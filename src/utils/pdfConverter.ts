// src/utils/pdfConverter.ts
import jsPDF from 'jspdf';

export interface NewsImageData {
  imageUrl: string;
  title: string;
  date: string;
  description: string;
  author: string;
  body: string[];
}

export const convertNewsImageToPDF = async (newsData: NewsImageData): Promise<void> => {
  try {
    // Create a new PDF document
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - (2 * margin);

    // Add title
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    const titleLines = pdf.splitTextToSize(newsData.title, contentWidth);
    pdf.text(titleLines, margin, margin + 10);

    // Add date and author
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Date: ${newsData.date}`, margin, margin + 25);
    pdf.text(`Author:${newsData.author}`, margin, margin + 32);

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    const descriptionLines = pdf.splitTextToSize(newsData.description, contentWidth);
    pdf.text(descriptionLines, margin, margin + 45);

    // Load and add the image
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = newsData.imageUrl;
      });

      // Calculate image dimensions to fit within the page
      const maxImageWidth = contentWidth;
      const maxImageHeight = 100; // Maximum height for the image
      
      let imgWidth = img.width;
      let imgHeight = img.height;
      
      // Scale image to fit within constraints
      if (imgWidth > maxImageWidth) {
        const ratio = maxImageWidth / imgWidth;
        imgWidth = maxImageWidth;
        imgHeight = imgHeight * ratio;
      }
      
      if (imgHeight > maxImageHeight) {
        const ratio = maxImageHeight / imgHeight;
        imgHeight = maxImageHeight;
        imgWidth = imgWidth * ratio;
      }

      // Add image to PDF
      const imageY = margin + 60;
      pdf.addImage(img, 'JPEG', margin, imageY, imgWidth, imgHeight);

      // Add body content
      let currentY = imageY + imgHeight + 15;
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');

<<<<<<< HEAD
      newsData.body.forEach((paragraph) => {
=======
  newsData.body.forEach((paragraph) => {
>>>>>>> yasvanth
        const paragraphLines = pdf.splitTextToSize(paragraph, contentWidth);
        
        if (currentY + (paragraphLines.length * 5) > pageHeight - margin) {
          pdf.addPage();
          currentY = margin;
        }
        
        pdf.text(paragraphLines, margin, currentY);
        currentY += (paragraphLines.length * 5) + 5;
      });

    } catch (imageError) {
      console.error('Error loading image:', imageError);
      pdf.setFontSize(12);
      pdf.text('Image could not be loaded', margin, margin + 60);
    }
    const fileName = `news_${newsData.title.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30)}.pdf`;
    pdf.save(fileName);

  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
};

export const convertImageToPDF = async (imageUrl: string, title: string = 'News Image'): Promise<void> => {
  try {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;

    // Add title
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text(title, margin, margin + 10);

    // Load and add the image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = imageUrl;
    });

    // Calculate image dimensions to fit the page
    const maxWidth = pageWidth - (2 * margin);
    const maxHeight = pageHeight - (2 * margin) - 20; // Leave space for title
    
    let imgWidth = img.width;
    let imgHeight = img.height;
    
    // Scale image to fit within page constraints
    if (imgWidth > maxWidth) {
      const ratio = maxWidth / imgWidth;
      imgWidth = maxWidth;
      imgHeight = imgHeight * ratio;
    }
    
    if (imgHeight > maxHeight) {
      const ratio = maxHeight / imgHeight;
      imgHeight = maxHeight;
      imgWidth = imgWidth * ratio;
    }

    // Center the image
    const x = (pageWidth - imgWidth) / 2;
    const y = margin + 20;

    pdf.addImage(img, 'JPEG', x, y, imgWidth, imgHeight);

    // Save the PDF
    const fileName = `image_${title.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30)}.pdf`;
    pdf.save(fileName);

  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
};
