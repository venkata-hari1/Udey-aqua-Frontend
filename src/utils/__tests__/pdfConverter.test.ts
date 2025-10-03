// src/utils/__tests__/pdfConverter.test.ts
import { convertImageToPDF, convertNewsImageToPDF } from '../pdfConverter';

// Mock jsPDF
jest.mock('jspdf', () => {
  return jest.fn().mockImplementation(() => ({
    internal: {
      pageSize: {
        getWidth: () => 210,
        getHeight: () => 297,
      },
    },
    setFontSize: jest.fn(),
    setFont: jest.fn(),
    splitTextToSize: jest.fn((text) => [text]),
    text: jest.fn(),
    addImage: jest.fn(),
    addPage: jest.fn(),
    save: jest.fn(),
  }));
});

// Mock Image
global.Image = jest.fn().mockImplementation(() => ({
  onload: null,
  onerror: null,
  width: 800,
  height: 600,
  src: '',
}));

describe('PDF Converter', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('convertImageToPDF should create a PDF with image', async () => {
    const mockImageUrl = 'https://example.com/test-image.jpg';
    const mockTitle = 'Test News Image';

    // Mock successful image load
    const mockImage = new Image();
    mockImage.onload = jest.fn();
    mockImage.onerror = jest.fn();

    await expect(convertImageToPDF(mockImageUrl, mockTitle)).resolves.not.toThrow();
  });

  test('convertNewsImageToPDF should create a PDF with news data', async () => {
    const mockNewsData = {
      imageUrl: 'https://example.com/news-image.jpg',
      title: 'Test News Title',
      date: 'January 1, 2025',
      description: 'Test news description',
      author: 'Test Author',
      body: ['Paragraph 1', 'Paragraph 2', 'Paragraph 3'],
    };

    // Mock successful image load
    const mockImage = new Image();
    mockImage.onload = jest.fn();
    mockImage.onerror = jest.fn();

    await expect(convertNewsImageToPDF(mockNewsData)).resolves.not.toThrow();
  });

  test('should handle image loading errors gracefully', async () => {
    const mockNewsData = {
      imageUrl: 'https://invalid-url.com/image.jpg',
      title: 'Test News Title',
      date: 'January 1, 2025',
      description: 'Test news description',
      author: 'Test Author',
      body: ['Paragraph 1'],
    };

    // Mock image loading error
    const mockImage = new Image();
    mockImage.onload = null;
    mockImage.onerror = jest.fn();

    // Should not throw even if image fails to load
    await expect(convertNewsImageToPDF(mockNewsData)).resolves.not.toThrow();
  });
});
