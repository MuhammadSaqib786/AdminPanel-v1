import React from 'react';
import { Container, Text, Badge, useMantineTheme } from '@mantine/core';

const Footers = () => {
  const theme = useMantineTheme();
  const color = theme.colors.blue[theme.colorScheme === 'dark' ? 6 : 7];

  return (
    <Container size="xl" style={{ marginTop: 60, backgroundColor: color }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text size="sm" style={{ color: theme.white }}>Admin Panel</Text>
        <Badge color="teal" variant="light">
          © 2023 Adminpanel.com
        </Badge>
      </div>
    </Container>
  );
};

export default Footers;
