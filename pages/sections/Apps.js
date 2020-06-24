import React from 'react';
import {
    Layout,
    Card,
    Checkbox,
    TextField,
    RadioButton
} from '@shopify/polaris';

export default function Apps() {
    return(
        <Layout>
            <Layout.AnnotatedSection title="Apps" description="Integrations, Apps and Features">
                <Card sectioned>
                    <p>What Shopify Plus exclusive apps for features are you planning to use?</p>
                    <Checkbox label="Checkout.liquid"/>
                    <Checkbox label="Launchpad app"/>
                    <Checkbox label="Shopify Flow app "/>
                    <Checkbox label="Shopify Scripts & the Script Editor app"/>
                    <Checkbox label="Transporter app"/>
                    <Checkbox label="Bulk Account Inviter"/>
                    <Checkbox label="Avalara Avatax"/>
                    <Checkbox label="Wholesale Channel"/>
                    <Checkbox label="Gift Card API resource"/>
                    <Checkbox label="Multipass login feature"/>
                    <Checkbox label="User API resource"/>
                    <Checkbox label="Ev Certificate"/>
                    <p>What does your tech stack look like?</p>
                    <TextField label="Enterprise Resource Platform (ERP)"/>
                    <TextField label="Warehouse Management System (WMS)"/>
                    <TextField label="Fulfillment"/>
                    <TextField label="Product Information System (PIS)"/>
                    <TextField label="Order Management System (OMS)"/>
                    <TextField label="Email Marketing"/>
                    <TextField label="Loyalty/Reward points"/>
                    <TextField label="Finance/Accounting software"/>
                    <TextField label="Retail POS"/>
                    <TextField label="Anything else"/>
                    <p>Are you working with an integration partner for any of your 3rd party systems?
                    If so, please add their contact information in the Stakeholders section.</p>
                    <RadioButton label="Yes" checked={true} name="3rdparty"/>
                    <RadioButton label="No" checked={true} name="3rdparty"/>
                    <p>If you plan to have expansion stores, what needs to be synced across your stores?</p>
                    <Checkbox label="Inventory"/>
                    <Checkbox label="Product Information"/>
                    <Checkbox label="Collections"/>
                    <Checkbox label="Customers"/>
                    <Checkbox label="Theme updates"/>
                    <Checkbox label="Blogs"/>
                    <Checkbox label="Pages"/>
                    <Checkbox label="Shopify Flow workflows"/>
                    <Checkbox label="Staff accounts"/>
                </Card>
            </Layout.AnnotatedSection>
        </Layout>
    )
}