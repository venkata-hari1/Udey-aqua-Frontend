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

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleCountryChange = (event: any) => {
    setFormData(prev => ({
      ...prev,
      country: event.target.value
    }));
  };

  const handleRequestAccess = () => {
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
              icon={<AccountBalance />}
              iconPosition="start"
            />
            <Tab 
              label="Giropay" 
              icon={<Payment />}
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
                  justifyContent: 'flex-end'
                }}>
                  <Typography variant="caption" sx={{ fontSize: '12px' }}>
                    VISA
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '12px' }}>
                    Mastercard
                  </Typography>
                  <Typography variant="caption" sx={{ fontSize: '12px' }}>
                    Discover
                  </Typography>
                </Box>
              </Box>

              {/* Expiry and CVC */}
              <Box sx={{ display: 'flex', gap: '16px' }}>
                <TextField
                  label="Expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleInputChange('expiry')}
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
              <AccountBalance sx={{ fontSize: 48, color: '#ccc', marginBottom: '16px' }} />
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
              <Payment sx={{ fontSize: 48, color: '#ccc', marginBottom: '16px' }} />
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
