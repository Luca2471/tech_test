import React from 'react';
import { Container, Typography, List, ListItem } from '@mui/material';

export const IssueDetails = ({ vulnerability }) => {
  console.log(vulnerability);
  return (
    <Container>
      <Typography>{vulnerability?.name} - {vulnerability?.severity}</Typography>
      <Typography>Category: {vulnerability?.category}</Typography>
      <Typography>Description: {vulnerability?.description}</Typography>
      <Typography>Remediation: {vulnerability?.remediation}</Typography>
      <Typography>Exploit available: {vulnerability?.name}</Typography>
      <Typography>Cvss score: {vulnerability?.cvss_score}</Typography>
      <Typography>Cves: {vulnerability?.cves}</Typography>
      <List>
        External links:
        {vulnerability?.external_links.map((link) => (
          <ListItem key={link?.url}>{link?.title}: <a href={link?.url}>{link?.url}</a></ListItem>

        ))}
      </List>
      <Typography>Nessus plugin family: {vulnerability?.nessus_plugin_family}</Typography>
      <Typography>{vulnerability?.name}</Typography>

    </Container>
  )
};
