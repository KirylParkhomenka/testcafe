import { Selector, t } from 'testcafe';

class DashboardPage {  
    constructor() {
        this.formsMenuItem = Selector('li:nth-child(2) a:nth-child(1) > span.text');
        this.newFormButton = Selector('.ico-plus-circle2');
        this.formName = Selector('.col-sm-9 .form-control');
        this.templateMethod = Selector("img[src='https://snapformscdn.s3-ap-southeast-2.amazonaws.com/formtemplatev3.png']");
        this.nextButton = Selector('.modal-footer #next-btn');
        this.donationTemplate = Selector("ul.templates-in-category:nth-child(1) > li:nth-child(7)");
        this.selectTemplateNextButton = Selector("div.modal-footer:nth-child(6) > input.btn.btn-primary:nth-child(2)");
    }

    async addNewForm() {
        await t
            .click(this.formsMenuItem)
            .click(this.newFormButton)
            .typeText(this.formName, 'Test')
            .click(this.templateMethod)
            .click(this.nextButton)
            .click(this.donationTemplate)
            .click(this.selectTemplateNextButton);
    }
}
export default new DashboardPage();
