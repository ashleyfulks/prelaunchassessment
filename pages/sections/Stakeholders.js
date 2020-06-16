import React, { useState, useCallback } from 'react';
import {
	Layout,
	Card,
	TextField,
	Stack,
    RadioButton,
    Button,
    Form,
    FormLayout
} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

export default function Stakeholders() {
    const [Stakeholders, newStakeholder] = useState([]);
    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Company, setCompany] = useState('');
    const [JobTitle, setJobTitle] = useState('');
    const [ProjectRole, setProjectRole] = useState('');
    const [Region, setRegion] = useState('');
    const [TimeZone, setTimeZone] = useState('');

    // Define handlers
    const handleSubmit = useCallback((_event) => {
        
    });

    return (
		<Layout>
            <Layout.AnnotatedSection
                title="Stakeholders"
                description="Who are the owners, employees working on the project?">
                <Card sectioned>
                    <Form onSubmit={handleSubmit}>
                        <FormLayout>
                            <TextField label="Email"/>
                            <TextField label="Name"/>
                            <TextField label="Company"/>
                            <TextField label="Job title"/>
                            <TextField label="Project role"/>
                            <TextField label="Region"/>
                            <TextField label="Time zone"/>
                            <TextField label="Additional"/>
                            Should this person be CCed on all communications?
                            <Stack>
                                <RadioButton
                                    label="Yes"
                                    id="disabled2"
                                    name="comms321"
                                />
                                <RadioButton
                                    label="No"
                                    id="optional2"
                                    name="comms321"
                                />
                            </Stack>
                            Is this a Partner/Contractor/Consultant?
                            <Stack>
                                <RadioButton
                                    label="Yes"
                                    id="disabled3"
                                    name="isPartner"
                                />
                                <RadioButton
                                    label="No"
                                    id="optional3"
                                    name="isPartner"
                                />
                            </Stack>
                            <Button primary onSubmit={handleSubmit}>Save contact</Button>
                        </FormLayout>
                    </Form>
                    <TextField label="Are you open to hiring Shopify Experts or Plus Partners?"/>
                    Are you planning to continue with your agency partner after launch?
                    <Stack>
                        <RadioButton
                            label="Yes"
                            id="disabled4"
                            name="areContinue"
                        />
                        <RadioButton
                            label="No"
                            id="optional4"
                            name="areContinue"
                        />
                    </Stack>
                </Card>
            </Layout.AnnotatedSection>
        </Layout>
    )
}

