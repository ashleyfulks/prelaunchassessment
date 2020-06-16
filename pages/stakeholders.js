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
  
  export default class stakeholders extends React.Component {
    render() {
      return (
        <page>
<Layout>
  <Layout.Section><br></br>
 
    <FormLayout>
      <p>Who are the main business stakeholders in this project and what are their roles?</p>
  <TextField label="Stakeholder Name"/>
  <TextField label="Company"/>
  <TextField label="Email"/>
  <TextField label="Job Title"/>
  <TextField label="Project Role"/>
  <TextField label="Region"/>
  <TextField label="Timezone"/>
  <TextField label="Main Point of Contact (POC) and should be looped into all communications"/>
  <TextField label="Any additional information we should know about your role in the project or the company?"/>
  <Button primary>Save Stakeholder</Button>
  <p>Do you have an agency partner for launch?</p>
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
  </FormLayout>
  </Layout.Section>
</Layout>
  </page>
      );
    }
    
    
  }