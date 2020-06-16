import React, {useCallback, useState} from 'react';
import {
    Layout,
    Card,
    DatePicker,
    Stack,
    TextField,
    RadioButton
} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

export default function Dates() {
    return (
        <Layout>
            <Layout.AnnotatedSection title="Launch Date" description="What date are you planning to launch?">
                <Card>
                    What is your planned launch date?
                    <DatePicker
                        month="5"
                        year="2020"
                        selected="5/5/2020"
                    />
                    Are you planning a phased roll-out of stores, functionality or integrations?
                    <Stack horizontal>
                        <RadioButton label="Yes" name="isPhased"/>
                        <RadioButton label="No" name="isPhased"/>												
                    </Stack>
                    <TextField label="What is the store's web address?"/>
                    Do you have access to your DNS settings?
                    <Stack horizontal>
                        <RadioButton label="Yes" name="isPhased3"/>
                        <RadioButton label="No" name="isPhased3"/>												
                    </Stack>
                </Card>
            </Layout.AnnotatedSection>
        </Layout>
    )
}
