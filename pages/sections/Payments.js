import React from 'react';
import {
    RadioButton,
    Select,
    Checkbox,
    TextField,
    Layout,
    Card,
} from '@shopify/polaris';

export default function Payments() {
    return(
        <Layout>
            <Layout.AnnotatedSection>
                <Card sectioned>
                    <Select label="What is your main currency you are selling in?"
                        options={[
                            { label: 'AED', value: 'AED' },
                            { label: 'AFN', value: 'AFN' },
                            { label: 'ALL', value: 'ALL' },
                            { label: 'AMD', value: 'AMD' },
                            { label: 'ANG', value: 'ANG' },
                            { label: 'AOA', value: 'AOA' },
                            { label: 'ARS', value: 'ARS' },
                            { label: 'AUD', value: 'AUD' },
                            { label: 'AWG', value: 'AWG' },
                            { label: 'AZN', value: 'AZN' },
                            { label: 'BAM', value: 'BAM' },
                            { label: 'BBD', value: 'BBD' },
                            { label: 'BDT', value: 'BDT' },
                            { label: 'BGN', value: 'BGN' },
                            { label: 'BIF', value: 'BIF' },
                            { label: 'BMD', value: 'BMD' },
                            { label: 'BND', value: 'BND' },
                            { label: 'BOB', value: 'BOB' },
                            { label: 'BRL', value: 'BRL' },
                            { label: 'BSD', value: 'BSD' },
                            { label: 'BWP', value: 'BWP' },
                            { label: 'BZD', value: 'BZD' },
                            { label: 'CAD', value: 'CAD' },
                            { label: 'CDF', value: 'CDF' },
                            { label: 'CHF', value: 'CHF' },
                            { label: 'CLP', value: 'CLP' },
                            { label: 'CNY', value: 'CNY' },
                            { label: 'COP', value: 'COP' },
                            { label: 'CRC', value: 'CRC' },
                            { label: 'CVE', value: 'CVE' },
                            { label: 'CZK', value: 'CZK' },
                            { label: 'DJF', value: 'DJF' },
                            { label: 'DKK', value: 'DKK' },
                            { label: 'DOP', value: 'DOP' },
                            { label: 'DZD', value: 'DZD' },
                            { label: 'EGP', value: 'EGP' },
                            { label: 'ETB', value: 'ETB' },
                            { label: 'EUR', value: 'EUR' },
                            { label: 'FJD', value: 'FJD' },
                            { label: 'FKP', value: 'FKP' },
                            { label: 'GBP', value: 'GBP' },
                            { label: 'GEL', value: 'GEL' },
                            { label: 'GIP', value: 'GIP' },
                            { label: 'GMD', value: 'GMD' },
                            { label: 'GNF', value: 'GNF' },
                            { label: 'GTQ', value: 'GTQ' },
                            { label: 'GYD', value: 'GYD' },
                            { label: 'HKD', value: 'HKD' },
                            { label: 'HNL', value: 'HNL' },
                            { label: 'HRK', value: 'HRK' },
                            { label: 'HTG', value: 'HTG' },
                            { label: 'HUF', value: 'HUF' },
                            { label: 'IDR', value: 'IDR' },
                            { label: 'ILS', value: 'ILS' },
                            { label: 'INR', value: 'INR' },
                            { label: 'ISK', value: 'ISK' },
                            { label: 'JMD', value: 'JMD' },
                            { label: 'JPY', value: 'JPY' },
                            { label: 'KES', value: 'KES' },
                            { label: 'KGS', value: 'KGS' },
                            { label: 'KHR', value: 'KHR' },
                            { label: 'KMF', value: 'KMF' },
                            { label: 'KRW', value: 'KRW' },
                            { label: 'KYD', value: 'KYD' },
                            { label: 'KZT', value: 'KZT' },
                            { label: 'LAK', value: 'LAK' },
                            { label: 'LBP', value: 'LBP' },
                            { label: 'LKR', value: 'LKR' },
                            { label: 'LRD', value: 'LRD' },
                            { label: 'LSL', value: 'LSL' },
                            { label: 'MAD', value: 'MAD' },
                            { label: 'MDL', value: 'MDL' },
                            { label: 'MGA', value: 'MGA' },
                            { label: 'MKD', value: 'MKD' },
                            { label: 'MMK', value: 'MMK' },
                            { label: 'MNT', value: 'MNT' },
                            { label: 'MOP', value: 'MOP' },
                            { label: 'MUR', value: 'MUR' },
                            { label: 'MVR', value: 'MVR' },
                            { label: 'MWK', value: 'MWK' },
                            { label: 'MXN', value: 'MXN' },
                            { label: 'MYR', value: 'MYR' },
                            { label: 'MZN', value: 'MZN' },
                            { label: 'NAD', value: 'NAD' },
                            { label: 'NGN', value: 'NGN' },
                            { label: 'NIO', value: 'NIO' },
                            { label: 'NOK', value: 'NOK' },
                            { label: 'NPR', value: 'NPR' },
                            { label: 'NZD', value: 'NZD' },
                            { label: 'PAB', value: 'PAB' },
                            { label: 'PEN', value: 'PEN' },
                            { label: 'PGK', value: 'PGK' },
                            { label: 'PHP', value: 'PHP' },
                            { label: 'PKR', value: 'PKR' },
                            { label: 'PLN', value: 'PLN' },
                            { label: 'PYG', value: 'PYG' },
                            { label: 'QAR', value: 'QAR' },
                            { label: 'RON', value: 'RON' },
                            { label: 'RSD', value: 'RSD' },
                            { label: 'RUB', value: 'RUB' },
                            { label: 'RWF', value: 'RWF' },
                            { label: 'SAR', value: 'SAR' },
                            { label: 'SBD', value: 'SBD' },
                            { label: 'SCR', value: 'SCR' },
                            { label: 'SEK', value: 'SEK' },
                            { label: 'SGD', value: 'SGD' },
                            { label: 'SHP', value: 'SHP' },
                            { label: 'SLL', value: 'SLL' },
                            { label: 'SRD', value: 'SRD' },
                            { label: 'STD', value: 'STD' },
                            { label: 'SZL', value: 'SZL' },
                            { label: 'THB', value: 'THB' },
                            { label: 'TJS', value: 'TJS' },
                            { label: 'TOP', value: 'TOP' },
                            { label: 'TRY', value: 'TRY' },
                            { label: 'TTD', value: 'TTD' },
                            { label: 'TWD', value: 'TWD' },
                            { label: 'TZS', value: 'TZS' },
                            { label: 'UAH', value: 'UAH' },
                            { label: 'UGX', value: 'UGX' },
                            { label: 'USD', value: 'USD' },
                            { label: 'UYU', value: 'UYU' },
                            { label: 'UZS', value: 'UZS' },
                            { label: 'VND', value: 'VND' },
                            { label: 'VUV', value: 'VUV' },
                            { label: 'WST', value: 'WST' },
                            { label: 'XAF', value: 'XAF' },
                            { label: 'XCD', value: 'XCD' },
                            { label: 'XOF', value: 'XOF' },
                            { label: 'XPF', value: 'XPF' },
                            { label: 'YER', value: 'YER' },
                            { label: 'ZAR', value: 'ZAR' },
                            { label: 'ZMW', value: 'ZMW' }
                        ]}
                        />
                            </Card>
            </Layout.AnnotatedSection>
        </Layout>
    );
}