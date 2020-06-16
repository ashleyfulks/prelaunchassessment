import {
    Button,
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
    Subheading
  } from '@shopify/polaris';
  import React from 'react';
import {AppProvider, ContextualSaveBar, Frame} from '@shopify/polaris';
  
  export default class businessSummary extends React.Component {
    render() {
      return (
        <page>
<Layout>
  <Layout.Section>
  <Card title="Pre Launch Assessment" sectioned>
  <div class="Polaris-Tabs__Wrapper">
                <ul role="tablist" class="Polaris-Tabs">

                  
                  <li class="Polaris-Tabs__TabContainer">
                    <button id="menu-summary" role="tab" type="button" tabindex="0" class="Polaris-Tabs__Tab Polaris-Tabs__Tab--selected" aria-selected="true" aria-controls="all-customers-content" aria-label="All customers"><span
                        class="Polaris-Tabs__Title">Summary</span>
                    </button>
                  </li>
                  <li class="Polaris-Tabs__TabContainer"><button id="menu-stakeholders" role="tab" type="button" tabindex="-1" class="Polaris-Tabs__Tab" aria-selected="false" aria-controls="accepts-marketing-content"><span
                        class="Polaris-Tabs__Title">Stakeholders</span></button></li>
                  <li class="Polaris-Tabs__TabContainer"><button id="menu-dates" role="tab" type="button" tabindex="-1" class="Polaris-Tabs__Tab" aria-selected="false" aria-controls="repeat-customers-content"><span
                        class="Polaris-Tabs__Title">Dates</span></button></li>
                  <li class="Polaris-Tabs__TabContainer"><button id="menu-migration" role="tab" type="button" tabindex="-1" class="Polaris-Tabs__Tab" aria-selected="false" aria-controls="prospects-content"><span
                        class="Polaris-Tabs__Title">Migration</span></button></li>
                  <li class="Polaris-Tabs__TabContainer"><button id="menu-design" role="tab" type="button" tabindex="-1" class="Polaris-Tabs__Tab" aria-selected="false" aria-controls="prospects-content"><span
                        class="Polaris-Tabs__Title">Design</span></button></li>
                  <li class="Polaris-Tabs__TabContainer"><button id="menu-apps" role="tab" type="button" tabindex="-1" class="Polaris-Tabs__Tab" aria-selected="false" aria-controls="prospects-content"><span
                        class="Polaris-Tabs__Title">Apps</span></button></li>
                  <li class="Polaris-Tabs__TabContainer"><button id="menu-products" role="tab" type="button" tabindex="-1" class="Polaris-Tabs__Tab" aria-selected="false" aria-controls="accepts-marketing-content"><span
                        class="Polaris-Tabs__Title">Products</span></button></li>
                  <li class="Polaris-Tabs__TabContainer"><button id="menu-payments" role="tab" type="button" tabindex="-1" class="Polaris-Tabs__Tab" aria-selected="false" aria-controls="repeat-customers-content"><span
                        class="Polaris-Tabs__Title">Payments</span></button></li>
                  <li class="Polaris-Tabs__TabContainer"><button id="menu-taxes" role="tab" type="button" tabindex="-1" class="Polaris-Tabs__Tab" aria-selected="false" aria-controls="prospects-content"><span
                        class="Polaris-Tabs__Title">Taxes</span></button></li>
                  <li class="Polaris-Tabs__TabContainer"><button id="menu-languages" role="tab" type="button" tabindex="-1" class="Polaris-Tabs__Tab" aria-selected="false" aria-controls="prospects-content"><span
                        class="Polaris-Tabs__Title">Languages</span></button></li>
                  <li class="Polaris-Tabs__TabContainer"><button id="menu-channels" role="tab" type="button" tabindex="-1" class="Polaris-Tabs__Tab" aria-selected="false" aria-controls="prospects-content"><span
                        class="Polaris-Tabs__Title">Channels</span></button></li>
                  <li class="Polaris-Tabs__TabContainer"><button id="menu-objectives" role="tab" type="button" tabindex="-1" class="Polaris-Tabs__Tab" aria-selected="false" aria-controls="accepts-marketing-content"><span
                        class="Polaris-Tabs__Title">Objectives</span></button></li>
                  <li class="Polaris-Tabs__TabContainer"><button id="menu-additional" role="tab" type="button" tabindex="-1" class="Polaris-Tabs__Tab" aria-selected="false" aria-controls="repeat-customers-content"><span
                        class="Polaris-Tabs__Title">Additional</span></button></li>
                  <li class="Polaris-Tabs__DisclosureTab">
                    <div><button type="button" class="Polaris-Tabs__DisclosureActivator" aria-label="More tabs" tabindex="0" aria-controls="Polarispopover6" aria-owns="Polarispopover6" aria-expanded="false"><span class="Polaris-Tabs__Title"><span
                            class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                              <path d="M6 10a2 2 0 1 1-4.001-.001A2 2 0 0 1 6 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 12 10zm6 0a2 2 0 1 1-4.001-.001A2 2 0 0 1 18 10z" fill-rule="evenodd"></path>
                            </svg></span></span></button></div>
                  </li>
                </ul>
              </div>




              <div class="Polaris-Tabs__Panel" id="tab-summary" role="tabpanel" aria-labelledby="summary" tabindex="-1">
                <div class="Polaris-Card__Section">
                  <div class="Polaris-Card__SectionHeader">
                    <p>Information about the merchant and their business</p><br></br>
                    <FormLayout>
  <TextField label="1. Tell us about your business: your brand, industry, products and customers."/>
  <TextField label="2. What is your annual business revenue to date?"/>
  <p>3. Do you have other brands currently on Shopify or Shopify Plus?"</p>
  <Stack vertical>
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
    <TextField label="If Yes then please provide the URL"/>
    <TextField label="What are your main reasons for choosing Shopify Plus?"/>
    </FormLayout>




                  </div>
                </div>
              </div>
    </Card>
  </Layout.Section>
</Layout>
  </page>
      );
    }
    
    
  }