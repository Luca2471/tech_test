import React, { useContext, useEffect } from 'react';
import { VulnerabilityContext } from '../../App';
import { Header } from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IssueDetails } from './components/IssueDetails';

export default function Issue() {
  const navigate = useNavigate();
  const [selectedVulnerability] = useContext(VulnerabilityContext)

  useEffect(() => {
    if (!selectedVulnerability)
      navigateBack()
  }, []);

  const navigateBack = () => {
    navigate('/home');
  };

  return (
    <>
      <Header />
      <IssueDetails vulnerability={selectedVulnerability} />
      <Button onClick={navigateBack} variant="contained" startIcon={<ArrowBackIcon />}>Back</Button>
      <Footer />
    </>
  )
};
