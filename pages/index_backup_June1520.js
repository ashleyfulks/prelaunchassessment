import {
	AppProvider,
	Button,
	ButtonGroup,
    RadioButton,
	Card,
	Frame,
    Form,
    FormLayout,
    Layout,
    Page,
    SettingToggle,
    Stack,
    TextField,
    TextStyle,
    Heading,
    Subheading,
	RangeSlider,
	Collapsible,
	DatePicker,
	Select,
	Thumbnail
  } from '@shopify/polaris';
import React, { Component, useCallback, useState } from 'react';
import '@shopify/polaris/styles.css';
import TabsExample from './TabsExample';
import Summary from './sections/Summary';
import Stakeholders from './sections/Stakeholders';
import Dates from './sections/Dates';
import Migration from './sections/Migration';
import Design from './sections/Design';
import Apps from './sections/Apps';
import Products from './sections/Products';

export default function index() {
	return (
		<AppProvider i18n={{}}
			features={{newDesignLanguage: true}}
			theme={{
			colors: {
				surface: '#111213',
				onSurface: '#111213',
				interactive: '#2e72d2',
				secondary: '#111213',
				primary: '#3b5998',
				critical: '#d82c0d',
				warning: '#ffc453',
				highlight: '#5bcdda',
				success: '#008060',
				decorative: '#ffc96b',
				},
			}}>
			<Frame>
				<Page title="Launch Accelerator" thumbnail={<Thumbnail source="https://screenshot.click/20-06-xy1ym-xqg8n.png"/>}>
					<Layout>
						<Layout.Section>
							<TabsExample/>
							<FormLayout>
							<Summary/>
							<Stakeholders/>
							<Dates/>
							<Migration/>
							<Design/>
							<Apps/>
							<Products/>
							</FormLayout>
						</Layout.Section>
					</Layout>
				</Page>
			</Frame>
		</AppProvider>
    );
}