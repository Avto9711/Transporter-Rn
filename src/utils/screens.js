const Screens = {
    AppStack: {
        Home:"HomePage",
        Message:"MessagePage",
        PackageDelivery: "PackageDeliveryPage",
        RecipientsBoard: "RecipientsBoardPage",
        Trip: "TripPage",
        TransporterBoard: "TransporterBoardPage",
        MyRecipientsCouriers:"MyRecipientsCouriersPage"
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
