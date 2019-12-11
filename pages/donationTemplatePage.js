import { Selector, t } from 'testcafe';

class DonationTemplatePage {  
    constructor() {
        this.shortAnswerElement = Selector('div.panel-body div:nth-child(1) p:nth-child(1) > button.btn.btn-default.btn-xs.item-type');
        this.targetElementOnTheTop = Selector("div[data-fieldlabel='choose a donation amount']");
        this.elementTitle = Selector('.col-sm-6 #edit-text-label');
        this.saveAndCloseButton = Selector('div.modal.fade.in:nth-child(22) div.modal-dialog.modal-lg div.modal-content div.modal-footer > button.btn.btn-primary.edit-modal-submit:nth-child(3)');
        this.nextButton = Selector('li:nth-child(2) > a.btn.btn-primary');
        this.previewLinkPage = Selector('a[id=formlink]');
    }

    async addShortAnswerElementToTheTop(elTitle) {
        await t
            .dragToElement(this.shortAnswerElement, this.targetElementOnTheTop)
            .typeText(this.elementTitle, elTitle)
            .click(this.saveAndCloseButton);
    }

    async addShortAnswerElementByCoordinates(elTitle, x, y) {
        await t
            .drag(this.shortAnswerElement, x, y)
            .typeText(this.elementTitle, elTitle)
            .click(this.saveAndCloseButton);
    }

    async proceedToPublishPage() {
        await t
            .click(this.nextButton)
            .click(this.nextButton);
    }

    async openPreviewPage() {
        await t
            .click(this.previewLinkPage);
    }
}
export default new DonationTemplatePage();
