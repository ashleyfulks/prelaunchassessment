import React, {useCallback, useRef, useState} from 'react';
import {ActionList, AppProvider, Avatar, Card, ContextualSaveBar, FormLayout, Frame, Layout, Loading, Modal, Navigation, Page, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer, TextField, Toast, TopBar} from '@shopify/polaris';
import {
	ConversationMinor, 
	DomainsMajorMonotone,
	SmileyHappyMajorMonotone,
	IllustrationMajorMonotone,
	ImportStoreMajorMonotone,
	ImageMajorMonotone,
	AppsMajorMonotone,
	ProductsMajorMonotone,
	CurrencyConvertMinor,
	TaxMajorMonotone,
	LanguageMinor,
	ChannelsMajorMonotone,
	GlobeMajorMonotone,
	AffiliateMajorMonotone,
	SocialAdMajorMonotone,
	FolderMajorMonotone,
	ChecklistMajorMonotone,
	HintMajorMonotone
} from '@shopify/polaris-icons';
import Summary from './sections/Summary';
import Stakeholders from './sections/Stakeholders';
import Dates from './sections/Dates';
import Migration from './sections/Migration';
import Design from './sections/Design';
import Apps from './sections/Apps';
import Products from './sections/Products';
import Payments from './sections/Payments';
import '@shopify/polaris/styles.css';


export default function index() {
  const defaultState = useRef({
    emailFieldValue: 'ashley.fulks@shopify.com',
    nameFieldValue: 'Technical Services',
  });
  const skipToContentRef = useRef(null);

  const [toastActive, setToastActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [nameFieldValue, setNameFieldValue] = useState(
    defaultState.current.nameFieldValue,
  );
  const [emailFieldValue, setEmailFieldValue] = useState(
    defaultState.current.emailFieldValue,
  );
  const [storeName, setStoreName] = useState(
    defaultState.current.nameFieldValue,
  );
  const [supportSubject, setSupportSubject] = useState('');
  const [supportMessage, setSupportMessage] = useState('');

  const handleSubjectChange = useCallback(
    (value) => setSupportSubject(value),
    [],
  );
  const handleMessageChange = useCallback(
    (value) => setSupportMessage(value),
    [],
  );
  const handleDiscard = useCallback(() => {
    setEmailFieldValue(defaultState.current.emailFieldValue);
    setNameFieldValue(defaultState.current.nameFieldValue);
    setIsDirty(false);
  }, []);
  const handleSave = useCallback(() => {
    defaultState.current.nameFieldValue = nameFieldValue;
    defaultState.current.emailFieldValue = emailFieldValue;

    setIsDirty(false);
    setToastActive(true);
    setStoreName(defaultState.current.nameFieldValue);
  }, [emailFieldValue, nameFieldValue]);
  const handleNameFieldChange = useCallback((value) => {
    setNameFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleEmailFieldChange = useCallback((value) => {
    setEmailFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue('');
  }, []);
  const handleSearchFieldChange = useCallback((value) => {
    setSearchValue(value);
    setSearchActive(value.length > 0);
  }, []);
  const toggleToastActive = useCallback(
    () => setToastActive((toastActive) => !toastActive),
    [],
  );
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    [],
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive,
      ),
    [],
  );
  const toggleIsLoading = useCallback(
    () => alert('These will auto scroll to section clicked'),
    [],
  );
  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    [],
  );

  const toastMarkup = toastActive ? (
    <Toast onDismiss={toggleToastActive} content="Changes saved" />
  ) : null;

  const userMenuActions = [
    {
      items: [{content: 'Launch Manual'}],
    },
  ];

  const contextualSaveBarMarkup = isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: handleSave,
      }}
      discardAction={{
        onAction: handleDiscard,
      }}
    />
  ) : null;

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Launch Engineeers"
      detail={storeName}
      initials="L"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const searchResultsMarkup = (
    <Card>
      <ActionList
        items={[
          {content: 'Shopify help center'},
          {content: 'Community forums'},
        ]}
      />
    </Card>
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      value={searchValue}
      placeholder="Search"
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

	function openLaunchDrive() {
		window.open('https://drive.google.com/drive/u/0/folders/1eOyMi5EzsVNY7aGC1Ra0QCW1I82x7mV2', '_blank');
	};

	function openLaunchGuide() {
		window.open('https://drive.google.com/file/d/1th_rF6ZDmKTil_ayjfzF72Hf6ntm3cQZ/view?usp=sharing', '_blank');
	};

	function openChecklist() {
		window.open('https://docs.google.com/spreadsheets/d/1xUKlKLwh2kMFWH0fLAo6DX-KlPcwdmjde2tEgRN3MgM/edit?usp=sharing', '_blank');
	};

	function openWelcomeKit() {
		window.open('https://drive.google.com/file/d/1ChGVOQs7NBhFOlAGpXb1jJLFmCjShRoo/view?usp=sharing', '_blank');
	}

	function openFastMigration () {
		window.open('https://drive.google.com/file/d/1zGU74TCSYXjtlGtKp2Bg-E-PvXwmX9o5/view?usp=sharing', '_blank');
	}
  const navigationMarkup = (
	<Navigation location="/">

	
      <Navigation.Section
        separator
        title="Click on a section"
        items={[
          {
            label: 'Business Summary',
            icon: DomainsMajorMonotone,
            onClick: toggleIsLoading,
          },
          {
            label: 'Stakeholders',
            icon: SmileyHappyMajorMonotone,
            onClick: toggleIsLoading,
		  },
		  {
            label: 'Launch date',
            icon: IllustrationMajorMonotone,
            onClick: toggleIsLoading,
          },
          {
            label: 'Migration',
            icon: ImportStoreMajorMonotone,
            onClick: toggleIsLoading,
		  },
		  {
            label: 'Design',
            icon: ImageMajorMonotone,
            onClick: toggleIsLoading,
          },
          {
            label: 'Integrations, apps and features',
            icon: AppsMajorMonotone,
            onClick: toggleIsLoading,
		  },
		  {
            label: 'Product Details',
            icon: ProductsMajorMonotone,
            onClick: toggleIsLoading,
          },
          {
            label: 'Currencies & Payment Gateways',
            icon: CurrencyConvertMinor,
            onClick: toggleIsLoading,
		  },
		  {
            label: 'Taxes & Shipping',
            icon: TaxMajorMonotone,
            onClick: toggleIsLoading,
          },
          {
            label: 'Languages',
            icon: LanguageMinor,
            onClick: toggleIsLoading,
		  },
		  {
            label: 'Sales Channels',
            icon: ChannelsMajorMonotone,
            onClick: toggleIsLoading,
          },
          {
            label: 'Future Business Objectives',
            icon: GlobeMajorMonotone,
            onClick: toggleIsLoading,
		  },
		  {
            label: 'Additional Requirements',
            icon: AffiliateMajorMonotone,
            onClick: toggleIsLoading,
          }
        ]}
        action={{
          icon: ConversationMinor,
          accessibilityLabel: 'Report an issue with the form',
          onClick: toggleModalActive,
        }}
      />
    </Navigation>
  );

  const loadingMarkup = isLoading ? <Loading /> : null;

  const skipToContentTarget = (
    <a id="SkipToContentTarget" ref={skipToContentRef} tabIndex={-1} />
  );

  const actualPageMarkup = (
    <Page title="Pre Launch Assessment">
    	<Layout>
			<Layout.Section>
      <Summary/><br/>
				<Stakeholders/><br/>
				<Dates/><br/>
				<Migration/><br/>
				<Design/><br/>
				<Apps/><br/>
				<Products/><br/>
				<Payments/><br/>
			</Layout.Section>
		</Layout>
    </Page>
  );

  const loadingPageMarkup = (
    <SkeletonPage>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={9} />
            </TextContainer>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );

  const pageMarkup = isLoading ? loadingPageMarkup : actualPageMarkup;

  const modalMarkup = (
    <Modal
      open={modalActive}
      onClose={toggleModalActive}
      title="Feedback"
      primaryAction={{
        content: 'Send',
        onAction: toggleModalActive,
      }}
    >
      <Modal.Section>
        <FormLayout>
          <TextField
            label="Subject"
            value={supportSubject}
            onChange={handleSubjectChange}
          />
          <TextField
            label="Message"
            value={supportMessage}
            onChange={handleMessageChange}
            multiline
          />
        </FormLayout>
      </Modal.Section>
    </Modal>
  );

  const theme = {
    colors: {
      topBar: {
        background: '#457b9d',
      },
    },
    logo: {
      width: 50,
      topBarSource:
        'https://screenshot.click/20-06-tejkp-vp7q2.png',
      contextualSaveBarSource:
        'https://screenshot.click/20-06-tejkp-vp7q2.png',
      url: 'http://www.shopify.com',
      accessibilityLabel: 'Pre Launch Assessment Demo',
    },
  };

  return (
    <div style={{height: '500px'}}>
      <AppProvider
        theme={theme}
        i18n={{
          Polaris: {
            Avatar: {
              label: 'Avatar',
              labelWithInitials: 'Avatar with initials {initials}',
            },
            ContextualSaveBar: {
              save: 'Save',
              discard: 'Discard',
            },
            TextField: {
              characterCount: '{count} characters',
            },
            TopBar: {
              toggleMenuLabel: 'Toggle menu',

              SearchField: {
                clearButtonLabel: 'Clear',
                search: 'Search',
              },
            },
            Modal: {
              iFrameTitle: 'body markup',
            },
            Frame: {
              skipToContent: 'Skip to content',
              Navigation: {
                closeMobileNavigationLabel: 'Close navigation',
              },
            },
          },
        }}
      >
        <Frame

          navigation={navigationMarkup}
          showMobileNavigation={mobileNavigationActive}
          onNavigationDismiss={toggleMobileNavigationActive}
          skipToContentTarget={skipToContentRef.current}
>
          {contextualSaveBarMarkup}
          {loadingMarkup}
          {pageMarkup}
          {toastMarkup}
          {modalMarkup}
        </Frame>
      </AppProvider>
    </div>
  );
}