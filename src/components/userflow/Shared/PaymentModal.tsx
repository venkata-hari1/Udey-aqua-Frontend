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
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Tabs,
  Tab,
  IconButton,
} from '@mui/material';
import { Close, CreditCard, AccountBalance, Payment } from '@mui/icons-material';
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

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    
    // Format input based on field type
    if (field === 'cardNumber') {
      // Remove all non-digits and limit to 16 digits, add spaces every 4 digits
      value = value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
    } else if (field === 'expiry') {
      // Format as MM/YY
      value = value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, '$1/');
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
        padding: '24px 24px 0 24px'
      }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Payment Details
        </Typography>
        <IconButton onClick={onClose} size="small">
          <Close />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ padding: '24px' }}>
        {/* Payment Method Tabs */}
        <Box sx={{ marginBottom: '24px' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 500,
                minHeight: '48px',
                border: '1px solid #e0e0e0',
                borderBottom: 'none',
                borderRadius: '8px 8px 0 0',
                marginRight: '4px',
                backgroundColor: 'white',
                color: '#666',
              },
              '& .Mui-selected': {
                backgroundColor: 'white',
                color: '#1976d2',
                borderColor: '#1976d2',
                borderWidth: '2px',
              }
            }}
          >
            <Tab 
              label="Card" 
              icon={<CreditCard />}
              iconPosition="start"
            />
             <Tab 
               label="EPS" 
               icon={<Box component="img" src={epsImg} alt="EPS" sx={{ height: 20, width: 'auto' }} />}
               iconPosition="start"
             />
             <Tab 
               label="Giropay" 
               icon={<Box component="img" src={giropayImg} alt="Giropay" sx={{ height: 20, width: 'auto' }} />}
               iconPosition="start"
             />
          </Tabs>
        </Box>

        {/* Payment Form */}
        <Box sx={{ 
          border: '1px solid #e0e0e0', 
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          padding: '24px',
          backgroundColor: 'white'
        }}>
          {activeTab === 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Card Number */}
              <Box>
                 <TextField
                   fullWidth
                   label="Card number"
                   placeholder="1234 1234 1234 1234"
                   value={formData.cardNumber}
                   onChange={handleInputChange('cardNumber')}
                   error={!!formErrors.cardNumber}
                   helperText={formErrors.cardNumber}
                   sx={{
                     '& .MuiOutlinedInput-root': {
                       backgroundColor: 'white',
                       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                       '&:hover': {
                         boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                       },
                       '&.Mui-focused': {
                         boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                       }
                     }
                   }}
                 />
                <Box sx={{ 
                  display: 'flex', 
                  gap: '8px', 
                  marginTop: '8px',
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}>
                  <Box component="img" src={visaImg} alt="Visa" sx={{ height: 20, width: 'auto' }} />
                  <Box component="img" src={mastercardImg} alt="Mastercard" sx={{ height: 20, width: 'auto' }} />
                  <Box component="img" src={americanExpressImg} alt="American Express" sx={{ height: 20, width: 'auto' }} />
                  <Box component="img" src={discoverImg} alt="Discover" sx={{ height: 20, width: 'auto' }} />
                </Box>
              </Box>

              {/* Expiry and CVC */}
              <Box sx={{ display: 'flex', gap: '16px' }}>
                 <TextField
                   label="Expiry"
                   placeholder="MM/YY"
                   value={formData.expiry}
                   onChange={handleInputChange('expiry')}
                   error={!!formErrors.expiry}
                   helperText={formErrors.expiry}
                   sx={{ 
                     flex: 1, 
                     '& .MuiOutlinedInput-root': { 
                       backgroundColor: 'white',
                       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                       '&:hover': {
                         boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                       },
                       '&.Mui-focused': {
                         boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                       }
                     } 
                   }}
                 />
                 <TextField
                   label="CVC"
                   placeholder="CVC"
                   value={formData.cvc}
                   onChange={handleInputChange('cvc')}
                   error={!!formErrors.cvc}
                   helperText={formErrors.cvc}
                   sx={{ 
                     flex: 1, 
                     '& .MuiOutlinedInput-root': { 
                       backgroundColor: 'white',
                       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                       '&:hover': {
                         boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                       },
                       '&.Mui-focused': {
                         boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                       }
                     } 
                   }}
                 />
              </Box>

              {/* Country */}
              <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select
                  value={formData.country}
                  onChange={handleCountryChange}
                  label="Country"
                  sx={{ 
                    backgroundColor: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    }
                  }}
                >
                  <MenuItem value="United States">United States</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                </Select>
              </FormControl>

              {/* Postal Code */}
               <TextField
                 fullWidth
                 label="Postal code"
                 placeholder="90210"
                 value={formData.postalCode}
                 onChange={handleInputChange('postalCode')}
                 error={!!formErrors.postalCode}
                 helperText={formErrors.postalCode}
                 sx={{ 
                   '& .MuiOutlinedInput-root': { 
                     backgroundColor: 'white',
                     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                     '&:hover': {
                       boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                     },
                     '&.Mui-focused': {
                       boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                     }
                   } 
                 }}
               />
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
