import React, { Component, useCallback, useState } from 'react';
import {
    Layout,
    Card,
    RadioButton,
    Select,
    FormLayout,
    TextField,
} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

export default function Migration() {
    // Decare initial states and change variables
    const [migrationq1, setMigrationq1] = useState('');

    // Declare change variables
    const handleMigrationq1 = useCallback((newValue) => setMigrationq1(newValue), []);
    return (
        <Layout>
            <Layout.AnnotatedSection title="Migration" description="Are you moving from another platform?">
                <Card>
                    <div>Is data migration a requirement?</div>
                    <RadioButton label="Yes" name="migrationReq" onChange={handleMigrationq1}/>
                    <RadioButton label="No" name="migrationReq" onChange={handleMigrationq1}/>			
                    <Select label="Which platform are you migrating from?"
                            options={[
                                {label: 'Magento', value: 'Magento'},
                                {label: 'BigCommerce', value: 'BigCommerce'},
                                {label: 'WooCommerce', value: 'WooCommerce'},
                                {label: 'Demandware / Salesforce Commerce Cloud', value: 'Demandware / Salesforce Commerce Cloud'},
                                {label: 'Volusion', value: 'Volusion'},
                                {label: 'ASP.net', value: 'ASP.net'},
                                {label: 'Squarespace', value: 'Squarespace'},
                                {label: '3D Cart', value: '3D Cart'},
                                {label: 'Custom', value: 'Custom'},
                                {label: 'other', value: 'other'},
                                ]}/>
                    What data is being migrated?
                    <FormLayout>
                        <FormLayout.Group condensed>
                            <TextField label="Products"/>
                            <TextField label="Reviews"/>
                            <TextField label="Customers"/>
                            <TextField label="Orders"/>
                        </FormLayout.Group>
                        <FormLayout.Group condensed>
                            <TextField label="Gift Vouchers"/>
                            <TextField label="Discounts"/>
                            <TextField label="Blogs"/>
                            <TextField label="Pages"/>
                        </FormLayout.Group>
                    </FormLayout>
                    <Select label="Who is handling your migration?"
                        options={[
                        {label: 'Agency Partner', value: 'Agency Partner'},
                        {label: 'In-house', value: 'In-house'},
                        {label: 'To be determined', value: 'To be determined'}]}/>
                    <Select label="How will the migration be handled?"
                        options={[
                            {label: 'Agency Partner', value: 'Agency Partner'},
                            {label: 'Import store app', value: 'Import store app'},
                            {label: 'Transporter app', value: "Transporter app"},
                            {label: 'Third party app service', value: 'Third party app service'},
                            {label: 'Direct Shopify app integration', value: 'Direct Shopify app integration'},
                            {label: 'other', value: 'other'}
                        ]}/>
                    <Select label="Who will be handling 301 URL redirects?"
                        options={[
                            {label: 'Agency Partner', value: 'Agency Partner'},
                            {label: 'In-house', value: 'In-house'},
                            {label: 'To be determined', value: 'To be determined'}
                        ]}/>
                </Card>
            </Layout.AnnotatedSection>
        </Layout>
    )
}