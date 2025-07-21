import React from 'react';
import { Typography, InputAdornment, Box, CardContent, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// Corrected: Import as an image path (e.g., PeopleImg)
import PeopleImg from '../../../assets/admin/fa-solid_users.png';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // This one is correctly imported as an MUI component

import bannerImage from '../../../assets/admin/banner.png';
import {
  StyledDashboardContainer,
  StyledDashboardHeader,
  StyledDashboardTitle,
  StyledSearchInput,
  StyledBannerAndStatsWrapper,
  StyledImageCard,
  StyledCardMedia,
  StyledStatsGrid,
  StyledStatCard,
  StyledStatCardContent,
  StyledStatIconBox,
  StyledStatNumber,
  StyledStatLabel,
  StyledChartsGrid,
  StyledChartCard,
  StyledChartTitle,
  StyledChartContainer,
  StyledChartYAxis,
  StyledChartArea,
  StyledChartBars,
  StyledChartBarContainer,
  StyledChartBar,
  StyledChartBarLabel,
  StyledRegisterCard,
  StyledRegisterHeader,
  StyledRegisterTitle,
  StyledRegisterToday,
  StyledRegisterStats,
  StyledRegisterStatItem,
  StyledRegisterStatLeft,
  StyledRegisterStatIcon,
  StyledRegisterStatLabel,
  StyledRegisterStatRight,
  StyledRegisterStatNumber,
  StyledRegisterStatDate,
} from '../styles/dashboard';

const Dashboard = () => {
  const chartData = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 30 },
    { month: 'Mar', value: 33 },
    { month: 'Apr', value: 50 },
    { month: 'May', value: 35 },
    { month: 'Jun', value: 50 },
    { month: 'Jul', value: 35 },
    { month: 'Aug', value: 36 },
    { month: 'Sep', value: 50 },
    { month: 'Oct', value: 30 },
    { month: 'Nov', value: 33 },
    { month: 'Dec', value: 33 }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <StyledDashboardContainer>
      <StyledDashboardHeader>
        <StyledDashboardTitle component="h1">Admin Dashboard</StyledDashboardTitle>
        <StyledSearchInput
          placeholder="Search..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </StyledDashboardHeader>

      <StyledBannerAndStatsWrapper>
        <StyledImageCard>
          <StyledCardMedia
            component="img"
            image={bannerImage}
            alt="Dashboard Banner"
          />
        </StyledImageCard>

        <StyledStatsGrid container spacing={3}>
          <Grid item xs={12} md={6}>
            <StyledStatCard>
              <StyledStatCardContent>
                <StyledStatIconBox>
                  {/* Corrected: Use <img> tag for the imported image */}
                  <img src={PeopleImg} alt="Total Subscribers Icon" style={{ width: 40, height: 40 }} />
                </StyledStatIconBox>
                <Box>
                  <StyledStatNumber>2,500</StyledStatNumber>
                  <StyledStatLabel>Total Subscribers</StyledStatLabel>
                </Box>
              </StyledStatCardContent>
            </StyledStatCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledStatCard>
              <StyledStatCardContent>
                <StyledStatIconBox>
                  {/* This one is an MUI component, so it's correct */}
                  <PersonAddIcon />
                </StyledStatIconBox>
                <Box>
                  <StyledStatNumber>530</StyledStatNumber>
                  <StyledStatLabel>Training Program Registered</StyledStatLabel>
                </Box>
              </StyledStatCardContent>
            </StyledStatCard>
          </Grid>
        </StyledStatsGrid>
      </StyledBannerAndStatsWrapper>

      <StyledChartsGrid container spacing={3}>
        <Grid item xs={12} md={8}>
          <StyledChartCard>
            <CardContent>
              <StyledChartTitle>Training Program Registrations</StyledChartTitle>
              <StyledChartContainer>
                <StyledChartYAxis>
                  <span>60</span>
                  <span>50</span>
                  <span>40</span>
                  <span>30</span>
                  <span>20</span>
                  <span>10</span>
                </StyledChartYAxis>
                <StyledChartArea>
                  <StyledChartBars>
                    {chartData.map((item, index) => (
                      <StyledChartBarContainer key={index}>
                        <StyledChartBar
                          style={{ height: `${(item.value / maxValue) * 100}%` }}
                        />
                        <StyledChartBarLabel>{item.month}</StyledChartBarLabel>
                      </StyledChartBarContainer>
                    ))}
                  </StyledChartBars>
                </StyledChartArea>
              </StyledChartContainer>
            </CardContent>
          </StyledChartCard>
        </Grid>

        <Grid item xs={12} md={4}>
          <StyledRegisterCard>
            <CardContent>
              <StyledRegisterHeader>
                <StyledRegisterTitle>Training Program Register</StyledRegisterTitle>
                <StyledRegisterToday>Today</StyledRegisterToday>
              </StyledRegisterHeader>
              
              <StyledRegisterStats>
                <StyledRegisterStatItem>
                  <StyledRegisterStatLeft>
                    <StyledRegisterStatIcon />
                    <StyledRegisterStatLabel>Total Members Joined</StyledRegisterStatLabel>
                  </StyledRegisterStatLeft>
                  <StyledRegisterStatNumber>20</StyledRegisterStatNumber>
                </StyledRegisterStatItem>
                
                <StyledRegisterStatItem>
                  <StyledRegisterStatLeft>
                    <StyledRegisterStatIcon />
                    <StyledRegisterStatLabel>Total Members Joined</StyledRegisterStatLabel>
                  </StyledRegisterStatLeft>
                  <StyledRegisterStatRight>
                    <StyledRegisterStatNumber>7</StyledRegisterStatNumber>
                    <StyledRegisterStatDate>Yesterday</StyledRegisterStatDate>
                  </StyledRegisterStatRight>
                </StyledRegisterStatItem>
                
                <StyledRegisterStatItem>
                  <StyledRegisterStatLeft>
                    <StyledRegisterStatIcon />
                    <StyledRegisterStatLabel>Total Members Joined</StyledRegisterStatLabel>
                  </StyledRegisterStatLeft>
                  <StyledRegisterStatRight>
                    <StyledRegisterStatNumber>10</StyledRegisterStatNumber>
                    <StyledRegisterStatDate>10/07/2025</StyledRegisterStatDate>
                  </StyledRegisterStatRight>
                </StyledRegisterStatItem>
              </StyledRegisterStats>
            </CardContent>
          </StyledRegisterCard>
        </Grid>
      </StyledChartsGrid>
    </StyledDashboardContainer>
  );
};

export default Dashboard;