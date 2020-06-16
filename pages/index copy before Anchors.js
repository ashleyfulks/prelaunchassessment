import {
	Button,
	ButtonGroup,
    RadioButton,
    Card,
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
import React, {useCallback, useState, Component} from 'react';
import {AppProvider, ContextualSaveBar, Frame} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

class Index extends React.Component {
	constructor(props) {
		super(this.props);
		this.state = {

		}
	}
}

const theme = {
    logo: {
      width: 124,
      topBarSource:
        'https://screenshot.click/20-06-xy1ym-xqg8n.png',
      url: 'https://www.shopify.ca/plus/services/merchant-success',
      accessibilityLabel: 'Launch Accelerator',
      contextualSaveBarSource:
        'https://screenshot.click/20-06-xy1ym-xqg8n.png',
    },
  };

const options = [
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
  ];

  // Adding in hideous topbar shit
  
  // Ending top
 

export default class index extends Component {
    render() {
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
						<ButtonGroup segmented>
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
						<FormLayout>
							<Layout>
								<Layout.AnnotatedSection
									title="Business summary"
									description="Please fill out as much of this form as you can. This will help us to help you.">
										<Card sectioned>
										<TextField id="Summary-Q1" label="Tell us about your business: your brand, industry, products and customers."/>
										<TextField label="What is your annual business revenue to date?"/>
										Do you have other brands currently on Shopify or Shopify Plus?
										<Stack horizontal>
											<RadioButton
												label="Yes"
												id="disabled"
												name="accounts"
											/>
											<RadioButton
												label="No"
												id="optional"
												name="accounts"
											/>
										</Stack>
										<TextField label="If yes, then please provide the URL:"/>
										<TextField label="What are your main reasons for choosing Shopify Plus?"/>
										</Card>
									</Layout.AnnotatedSection>
								</Layout>
								<Layout>
								<Layout.AnnotatedSection
									title="Stakeholders"
									description="Who are the owners, employees working on the project?">
										<Card sectioned>
										<TextField label="Name"/>
										<TextField label="Email"/>
										<TextField label="Company"/>
										<TextField label="Job title"/>
										<TextField label="Project role"/>
										<TextField label="Region"/>
										<TextField label="Time zone"/>
										<TextField label="Additional"/>
										Should this person be CCed on all communications?
										<Stack horizontal>
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
										<Stack horizontal>
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
										<Button primary>Save contact</Button>
										<TextField label="Are you open to hiring Shopify Experts or Plus Partners?"/>
										Are you planning to continue with your agency partner after launch?
										<Stack horizontal>
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
								<Layout>
									<Layout.AnnotatedSection title="Migration" description="Are you moving from another platform?">
										<Card>
											Is data migration a requirement?"
											<Stack>
											<RadioButton label="Yes" name="migrationReq"/>
											<RadioButton label="No" name="migrationReq"/>			
											</Stack>
											<Select label="Which platform are you migrating from?"
													options={options}/>
											What data is being migrated?
											<FormLayout>
												<FormLayout.Group condensed>
													<TextField label="Products" onChange={() => {}}/>
													<TextField label="Reviews" onChange={() => {}}/>
													<TextField label="Customers" onChange={() => {}}/>
													<TextField label="Orders" onChange={() => {}}/>
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

						</FormLayout>
				</Layout.Section>
			</Layout>
		</Page>
		</Frame>
		</AppProvider>
      );
    }
    
    
  }