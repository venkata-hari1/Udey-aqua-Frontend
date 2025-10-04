// src/components/userflow/Shared/PaymentModal.tsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Typography,
  IconButton,
} from '@mui/material';
import { Close, CreditCard } from '@mui/icons-material';
// import useSharedStyles from './sharedStyles';

// Payment method images
import visaImg from '../../../assets/payment_section/visa.png';
import mastercardImg from '../../../assets/payment_section/mastercard.png';
import discoverImg from '../../../assets/payment_section/discover.png';
import americanExpressImg from '../../../assets/payment_section/americanexpress.png';
import epsImg from '../../../assets/payment_section/eps.png';
import giropayImg from '../../../assets/payment_section/giropay.png';

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  speciesName: string;
  price: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ 
  open, 
  onClose, 
  speciesName, 
  price 
}) => {
  // const { classes } = useSharedStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    country: 'United States',
    postalCode: '',
  });

  const [formErrors, setFormErrors] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    postalCode: '',
  });

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'cardNumber':
        const cardNumber = value.replace(/\s/g, '');
        if (!cardNumber) return 'Card number is required';
        if (!/^\d{16}$/.test(cardNumber)) return 'Card number must be exactly 16 digits';
        return '';
      case 'expiry':
        if (!value) return 'Expiry date is required';
        if (!/^\d{2}\/\d{2}$/.test(value)) return 'Expiry must be in MM/YY format';
        // Validate month (01-12)
        const month = parseInt(value.split('/')[0]);
        if (month < 1 || month > 12) return 'Month must be between 01-12';
        return '';
      case 'cvc':
        if (!value) return 'CVC is required';
        if (!/^\d{3,4}$/.test(value)) return 'CVC must be 3-4 digits';
        return '';
      case 'postalCode':
        if (!value) return 'Postal code is required';
        if (!/^\d{5}$/.test(value)) return 'Postal code must be exactly 5 digits';
        return '';
      default:
        return '';
    }
  };


  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    
    // Format input based on field type
    if (field === 'cardNumber') {
      // Remove all non-digits and limit to 16 digits, add spaces every 4 digits
      value = value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
    } else if (field === 'expiry') {
      // Format as MM/YY - limit to exactly 5 characters (MM/YY
      value = value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
      // Limit to exactly 5 characters (MM/YY)
      if (value.length > 5) {
        value = value.substring(0, 5);
      }
    } else if (field === 'cvc') {
      // Only allow digits, max 4 characters
      value = value.replace(/\D/g, '').slice(0, 4);
    } else if (field === 'postalCode') {
      // Only allow digits, max 5 characters
      value = value.replace(/\D/g, '').slice(0, 5);
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing (no real-time validation)
    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleCountryChange = (event: any) => {
    setFormData(prev => ({
      ...prev,
      country: event.target.value
    }));
  };

  const isFormValid = () => {
    // Check if all required fields are filled and valid
    const cardNumberValid = formData.cardNumber && validateField('cardNumber', formData.cardNumber) === '';
    const expiryValid = formData.expiry && validateField('expiry', formData.expiry) === '';
    const cvcValid = formData.cvc && validateField('cvc', formData.cvc) === '';
    const postalCodeValid = formData.postalCode && validateField('postalCode', formData.postalCode) === '';
    
    return cardNumberValid && expiryValid && cvcValid && postalCodeValid;
  };

  const handleRequestAccess = () => {
    if (!isFormValid()) {
      // Validate all fields to show errors
      const newErrors = {
        cardNumber: validateField('cardNumber', formData.cardNumber),
        expiry: validateField('expiry', formData.expiry),
        cvc: validateField('cvc', formData.cvc),
        postalCode: validateField('postalCode', formData.postalCode),
      };
      setFormErrors(newErrors);
      return;
    }
    
    // Handle payment processing here
    console.log('Processing payment for:', speciesName, 'Amount:', price);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          maxHeight: '90vh',
          backgroundColor: 'white',
        }
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginLeft:3,
        padding: '24px 24px 0 24px'
      }}>
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '16px' }}>
          Payment Details
        </Typography>
        <IconButton onClick={onClose} size="small">
          <Close />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ padding: '24px' }}>
        {/* Payment Method Boxes */}
        <Box sx={{ marginBottom: '24px', display: 'flex', gap: '12px', justifyContent: 'flex-start' }}>
          <Box 
            onClick={() => setActiveTab(0)}
            sx={{
              width: '127px',
              height: '64px',
              padding: '10px 12px',
              border: activeTab === 0 ? '2px solid #0570DE' : '2px solid #E0E0E0',
              borderRadius: '6px',
              backgroundColor: activeTab === 0 ? '#f5f5f5' : 'white',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '8px',
              marginLeft: '20px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: '#f9f9f9',
              }
            }}
          >
            <CreditCard sx={{ width: 16, height: 16 }} />
            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '13px' }}>Card</Typography>
          </Box>
          
          <Box 
            onClick={() => setActiveTab(1)}
            sx={{
              width: '127px',
              height: '64px',
              padding: '10px 12px',
              border: activeTab === 1 ? '2px solid #0570DE' : '2px solid #E0E0E0',
              borderRadius: '6px',
              backgroundColor: activeTab === 1 ? '#f5f5f5' : 'white',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: '#f9f9f9',
              }
            }}
          >
            <Box component="img" src={epsImg} alt="EPS" sx={{ width: 16, height: 16 }} />
            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '13px' }}>EPS</Typography>
          </Box>
          
          <Box 
            onClick={() => setActiveTab(2)}
            sx={{
              width: '127px',
              height: '64px',
              padding: '10px 12px',
              border: activeTab === 2 ? '2px solid #0570DE' : '2px solid #E0E0E0',
              borderRadius: '6px',
              backgroundColor: activeTab === 2 ? '#f5f5f5' : 'white',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: '#f9f9f9',
              }
            }}
          >
            <Box component="img" src={giropayImg} alt="Giropay" sx={{ width: 16, height: 16 }} />
            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '13px' }}>Giropay</Typography>
          </Box>
        </Box>

        {/* Payment Form */}
        <Box sx={{ 
          padding: '24px',
          backgroundColor: 'white'
        }}>
          {activeTab === 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Card Number */}
              <Box sx={{ position: 'relative' }}>
                 <TextField
                   fullWidth
                   placeholder="1234 1234 1234 1234"
                   value={formData.cardNumber}
                   onChange={handleInputChange('cardNumber')}
                   error={!!formErrors.cardNumber}
                   helperText={formErrors.cardNumber}
                   sx={{
                     '& .MuiOutlinedInput-root': {
                       backgroundColor: 'white',
                       border: '2px solid #E0E0E0',
                       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                       '&:hover': {
                         boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                       },
                       '&.Mui-focused': {
                         boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                       },
                       '& fieldset': {
                         border: 'none',
                       },
                       '& input': {
                         fontSize: '16px',
                         '@media (max-width: 768px)': {
                           fontSize: '14px',
                         },
                         '@media (max-width: 480px)': {
                           fontSize: '12px',
                         }
                       }
                     }
                   }}
                 />
                <Box sx={{ 
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  display: 'flex', 
                  gap: '8px', 
                  alignItems: 'center',
                  '@media (max-width: 768px)': {
                    gap: '4px',
                    right: '8px',
                  },
                  '@media (max-width: 480px)': {
                    gap: '2px',
                    right: '6px',
                  }
                }}>
                  <Box component="img" src={visaImg} alt="Visa" sx={{ 
                    height: 20, 
                    width: 'auto',
                    '@media (max-width: 768px)': {
                      height: 16,
                    },
                    '@media (max-width: 480px)': {
                      height: 12,
                    }
                  }} />
                  <Box component="img" src={mastercardImg} alt="Mastercard" sx={{ 
                    height: 20, 
                    width: 'auto',
                    '@media (max-width: 768px)': {
                      height: 16,
                    },
                    '@media (max-width: 480px)': {
                      height: 12,
                    }
                  }} />
                  <Box component="img" src={americanExpressImg} alt="American Express" sx={{ 
                    height: 20, 
                    width: 'auto',
                    '@media (max-width: 768px)': {
                      height: 16,
                    },
                    '@media (max-width: 480px)': {
                      height: 12,
                    }
                  }} />
                  <Box component="img" src={discoverImg} alt="Discover" sx={{ 
                    height: 20, 
                    width: 'auto',
                    '@media (max-width: 768px)': {
                      height: 16,
                    },
                    '@media (max-width: 480px)': {
                      height: 12,
                    }
                  }} />
                </Box>
              </Box>

              {/* Expiry and CVC */}
              <Box sx={{ display: 'flex', gap: '16px' }}>
                 <TextField
                   placeholder="MM/YY"
                   value={formData.expiry}
                   onChange={handleInputChange('expiry')}
                   error={!!formErrors.expiry}
                   helperText={formErrors.expiry}
                   sx={{ 
                     flex: 1, 
                     '& .MuiOutlinedInput-root': { 
                       backgroundColor: 'white',
                       border: '2px solid #E0E0E0',
                       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                       '&:hover': {
                         boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                       },
                       '&.Mui-focused': {
                         boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                       },
                       '& fieldset': {
                         border: 'none',
                       }
                     } 
                   }}
                 />
                 <TextField
                   placeholder="CVC"
                   value={formData.cvc}
                   onChange={handleInputChange('cvc')}
                   error={!!formErrors.cvc}
                   helperText={formErrors.cvc}
                   sx={{ 
                     flex: 1, 
                     '& .MuiOutlinedInput-root': { 
                       backgroundColor: 'white',
                       border: '2px solid #E0E0E0',
                       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                       '&:hover': {
                         boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                       },
                       '&.Mui-focused': {
                         boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                       },
                       '& fieldset': {
                         border: 'none',
                       }
                     } 
                   }}
                 />
              </Box>

              {/* Country and Postal Code in same row */}
              <Box sx={{ display: 'flex', gap: '16px' }}>
                <FormControl sx={{ flex: 1 }}>
                  <Select
                    value={formData.country}
                    onChange={handleCountryChange}
                    sx={{ 
                      backgroundColor: 'white',
                      border: '2px solid #E0E0E0',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      '&:hover': {
                        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                      },
                      '&.Mui-focused': {
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      }
                    }}
                  >
                    <MenuItem value="United States">United States</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  placeholder="Postal code"
                  value={formData.postalCode}
                  onChange={handleInputChange('postalCode')}
                  error={!!formErrors.postalCode}
                  helperText={formErrors.postalCode}
                  sx={{ 
                    flex: 1,
                    '& .MuiOutlinedInput-root': { 
                      backgroundColor: 'white',
                      border: '2px solid #E0E0E0',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      '&:hover': {
                        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                      },
                      '&.Mui-focused': {
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                      },
                      '& fieldset': {
                        border: 'none',
                      }
                    } 
                  }}
                />
              </Box>
            </Box>
          )}

           {activeTab === 1 && (
             <Box sx={{ 
               display: 'flex', 
               flexDirection: 'column', 
               alignItems: 'center',
               padding: '40px 20px',
               textAlign: 'center'
             }}>
               <Typography variant="h6" sx={{ marginBottom: '8px', color: '#666' }}>
                 EPS Payment
               </Typography>
               <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '24px' }}>
                 Electronic Payment Standard - Coming Soon
               </Typography>
               <Typography variant="body2" color="text.secondary">
                 This payment method will be available in a future update.
               </Typography>
             </Box>
           )}

          {activeTab === 2 && (
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              padding: '40px 20px',
              textAlign: 'center'
            }}>
              <Typography variant="h6" sx={{ marginBottom: '8px', color: '#666' }}>
                Giropay Payment
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '24px' }}>
                German Online Banking - Coming Soon
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This payment method will be available in a future update.
              </Typography>
            </Box>
          )}

          {/* Request Access Button */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleRequestAccess}
            sx={{
              marginTop: '24px',
              backgroundColor: '#4caf50',
              color: 'white',
              padding: '12px',
              fontSize: '16px',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#45a049',
              }
            }}
          >
            Request access
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
