const Screens = {
    AppStack: {
        Home:"HomePage",
        Profile: 'ProfilePage',
        ProfileSetting: 'ProfileSetting',
        Message:"MessagePage",
        PackageDelivery: "PackageDeliveryPage",
        RecipientsBoard: "RecipientsBoardPage",
        Trip: "TripPage",
        TransporterBoard: "TransporterBoardPage",
        MyRecipientsCouriers:"MyRecipientsCouriersPage",
        Settings: "SettingsPage",
        PrivacyAndTerms:"PrivacyAndTermsPage",
        PackageDeliveryDetail:"PackageDeliveryDetailPage"
    },
    AuthStack: {
        RegistrationFormPage: 'RegistrationFormPage',
        InitialPage: 'InitialPage',
        LoginPage: 'LoginPage',
        ForgotPassword: 'ForgotPassword'
    }
}


const AuthScreensStack = Screens.AuthStack;
const AppStack = Screens.AppStack;

export {AuthScreensStack}

export {AppStack}

export default Screens;
