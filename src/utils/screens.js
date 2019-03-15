const Screens = {
    AppStack: {
        Home:"HomePage",
        Message:"MessagePage",
        PackageDelivery: "PackageDeliveryPage",
        RecipientsBoard: "RecipientsBoardPage",
        Trip: "TripPage",
        TransporterBoard: "TransporterBoardPage",
        MyRecipientsCouriers:"MyRecipientsCouriersPage",
        Settings: "SettingsPage",
        PrivacyAndTerms:"PrivacyAndTermsPage"
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
