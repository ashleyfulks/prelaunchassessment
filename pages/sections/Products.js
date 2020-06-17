import React from 'react';
import {
    Layout,
    Card,
    RadioButton,
    TextField,
    Checkbox
} from '@shopify/polaris';
import DiscountUpload from './DiscountUpload';

export default function Products() {
    return(
        <Layout>
            <Layout.AnnotatedSection title="Products" description="Tell us about your products">
                <Card>
                    <TextField label="Please outline your most complex products and how they are setup with variants/options, customizations, etc."/>
                    <TextField label="Do you products have additional product information outside of the product description that needs to appear on product pages?"/>
                    <RadioButton label="Yes" name="externalProdInfo"/>
                    <RadioButton label="No" name="externalProdInfo"/>
                    <TextField label="Do you sell product bundles?"/>
                    <RadioButton label="Yes" name="productBundles"/>
                    <TextField label="Are bundles pre-made or do staff assemble them by hand in fulfillment?"/>
                    <TextField label="How should bundles display to the customer on products and in the cart, checkout and order confirmation?"/>
                    <TextField label="How do bundles need to display for staff for reporting and fulfillment"/>
                    <RadioButton label="No" name="productBundles"/>
                    <TextField label="Do you require region specific pricing?"/>
                    <RadioButton label="Yes" name="regionSpecificPricing"/>
                    <TextField label="Specific pricing for each region"/>
                    <TextField label="Standard FX rate"/>
                    <RadioButton label="No" name="regionSpecificPricing"/>
                    <p>Do you offer discounts?</p>
                    <RadioButton label="Yes" name="offerDiscounts"/>
                    <TextField label="Please outline or give examples of your discounted strategy including use of discount codes, automatic discounts, tiered discounts, VIP pricing, etc."/>
                    <p>Upload your Discounts!</p>
                    <DiscountUpload/>
                    <RadioButton label="No" name="offerDiscounts"/>
                    <p>Do you take preorders?</p>
                    <RadioButton label="Yes" name="doYouPreorder"/>
                    <TextField label="Please outline your pre-order workflow and requirements"/>
                    <RadioButton label="No" name="doYouPreorder"/>
                    <p>Do you sell subscriptions or offer any other type of recurring payments, or payments over time?</p>
                    <RadioButton label="Yes" name="subscriptions"/>
                    <TextField label="Please outline your workflow and requirements"/>
                    <RadioButton label="No" name="subscriptions"/>
                    <TextField label="Please outline any other products complexities that we should be aware of."/>
                </Card>
            </Layout.AnnotatedSection>
        </Layout>
    );
}