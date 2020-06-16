import React, {useCallback, useState} from 'react';
import {Card, Tabs, ButtonGroup, Button} from '@shopify/polaris';
import {Route, Link} from 'react-router-dom';

export default function TabsExample() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );


/*
  const tabs = [
    {
        id: 'summary',
        content: 'Summary',
        accessibilityLabel: 'Summary',
        panelID: 'summary',
    },
    {
        id: 'Stakeholders',
        content: 'Stakeholders',
        panelID: 'Stakeholders',
    },
    {
        id: 'Dates',
        content: 'Dates',
        panelID: 'Dates',
    },
    {
        id: 'Migration',
        content: 'Migration',
        panelID: 'Migration',
    },
    {
        id: 'Design',
        content: 'Design',
        panelID: 'Design',
    },
    {
        id: 'Apps',
        content: 'Apps',
        panelID: 'Apps',
    },
    {
        id: 'Products',
        content: 'Products',
        panelID: 'Products',
    },
    {
        id: 'Payments',
        content: 'Payments',
        panelID: 'Payments',
    },
    {
        id: 'Taxes',
        content: 'Taxes',
        panelID: 'Taxes',
    },
    {
        id: 'Languages',
        content: 'Languages',
        panelID: 'Languages',
    },
    {
        id: 'Channels',
        content: 'Channels',
        panelID: 'Channels',
    },
    {
        id: 'Objectives',
        content: 'Objectives',
        panelID: 'Objectives',
    },
    {
        id: 'Additional',
        content: 'Additional',
        panelID: 'Additional',
    },
  ];
*/


  return (
      <route>
        
            <ButtonGroup>
                <Button>Summary</Button>
                <Button>Stakeholders</Button>
                <Button>Dates</Button>
                <Button>Migration</Button>
                <Button>Design</Button>
                <Button>Apps</Button>
                <Button>Products</Button>
                <Button>Payments</Button>
                <Button>Taxes</Button>
                <Button>Languages</Button>
                <Button>Channels</Button>
                <Button>Objectives</Button>
                <Button>Additional</Button>
            </ButtonGroup>
        
    </route>
  );
}
