import React, { useState, useCallback } from 'react';
import {
	Layout,
	Card,
	TextField,
	Stack,
	RadioButton
} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

export default function Summary(props) {
	const [summaryq1, setSummaryq1] = useState('Question 1');
	const [summaryq2, setSummaryq2] = useState('Question 2');
	const [summaryq3, setSummaryq3] = useState('No');
	const [summaryq4, setSummaryq4] = useState('Question 4');
	const [summaryq5, setSummaryq5] = useState('Question 5');
	
	const handleQ1Change = useCallback((newValue) => setSummaryq1(newValue), []);
	const handleQ2Change = useCallback((newValue) => setSummaryq2(newValue), []);
	const handleQ3Change = useCallback((_checked, newValue) => setSummaryq3(newValue), []);
	const handleQ4Change = useCallback((newValue) => setSummaryq4(newValue), []);
	const handleQ5Change = useCallback((newValue) => setSummaryq5(newValue), []);
	return (
			<Layout>
				<Layout.AnnotatedSection
					title="Business summary"
					description="Please fill out as much of this form as you can. This will help us to help you.">
					<Card sectioned>
						<TextField 
							name="question1" 
							onChange={handleQ1Change}
							label="Tell us about your business: your brand, industry, products and customers." 
							value={summaryq1}
						/>
						<TextField 
							label="What is your annual business revenue to date?" 
							value={summaryq2}
							onChange={handleQ2Change}
							name="summaryq2"
						/>
						Do you have other brands currently on Shopify or Shopify Plus?
						<Stack horizontal>
							<RadioButton
								label="Yes"
								id="No"
								name="question3"
								onChange={handleQ3Change}
								checked={true}
							/>
							<RadioButton
								label="No"
								id="Yes"
								name="question3"
								onChange={handleQ3Change}
								checked={true}
							/>
						</Stack>
						<TextField 
						label="If yes, then please provide the URL:"
						onChange={handleQ4Change}
						value={summaryq4}
						/>
						<TextField 
						label="What are your main reasons for choosing Shopify Plus?"
						value={summaryq5}
						onChange={handleQ5Change}
						/>
					</Card>
				</Layout.AnnotatedSection>
			</Layout>
		)
}

