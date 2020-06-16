import React, { useState, useCallback } from 'react';
import {
    Layout,
    Select,
    Card
} from '@shopify/polaris'

export default function Design() {
    // State and handlers
    return(
        <Layout>
            <Layout.AnnotatedSection title='Design' description='Who is handling the build?'>
                <Card>
                    <Select label="How is your storefront theme design being handled?"
                        options={[
                            {label: 'Purchased theme', value: 'Purchased theme'},
                            {label: 'Custom theme', value: 'Custom theme'},
                            {label: 'Headless', value: 'Headless'},
                            {label: 'Not applicable', value: 'Not applicable'}
                        ]}
                    />
                    <Select label="Who is handling storefront design?"
                        options={[
                            {label: 'Agency partner', value: 'Agency partner'},
                            {label: 'In-house', value: 'In-house'},
                            {label: 'Not applicable', value: 'Not applicable'}
                        ]}
                    />
                </Card>
            </Layout.AnnotatedSection>
        </Layout>
    )
};