import { Selector } from 'testcafe';
import InitialPage from '../pages/initialPage'
import DashboardPage from '../pages/dashboardPage'
import DonationTemplatePage from '../pages/donationTemplatePage'
import * as Constants from '../utils/testData'

fixture `Snapforms create a form test`
    .page `https://user.snapforms.com.au/login`;

test('Login to Snapforms and create a form', async t => {
    const userName = Selector('.meta .text.hidden-xs.hidden-sm.pl5');
    const addedField1 = Selector("div.form-group:nth-child(2) div.row div.snap-field.col-sm-6:nth-child(2) > label.control-label.mb5");
    const addedField2 = Selector("div.form-group:nth-child(6) div.row div.snap-field.col-sm-6:nth-child(1) > label.control-label.mb5");

    InitialPage.resizeWindow(1600, 800);
    InitialPage.loginTheApp(Constants.Login, Constants.Password);
    await t.expect(userName.innerText).eql(Constants.Login);

    DashboardPage.addNewForm();
    DonationTemplatePage.addShortAnswerElementToTheTop(Constants.ShortAnswerTitle1);
    DonationTemplatePage.addShortAnswerElementByCoordinates(Constants.ShortAnswerTitle2, 500, 500);  
    DonationTemplatePage.proceedToPublishPage();
    DonationTemplatePage.openPreviewPage();
    await t.expect(addedField1.exists).ok();
    await t.expect(addedField2.exists).ok(); 

    //TBD - remove created form. Now need to do it manually
});
