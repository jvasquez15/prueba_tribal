define(
    [
        'jquery',
        'ko',
        'Magento_Ui/js/modal/modal'
    ], function ($, ko, modal) {
        var mixin = {
            initialize: function () {
                this._super();
                this.handleModal = ko.observable(false);
            },
            hasCookiModal: function () {
                let temp = $.cookie("welcome_modal");
                if (temp) {
                    return true;
                } else {
                    return false;
                }
            },
            openModal: function () {

                if (!this.handleModal() ||  this.hasCookiModal()) {
                    return
                }
                this.optionModal();
                $("#welcome_default").modal('openModal');
                var date = new Date();
                var minutes = 2;
                date.setTime(date.getTime() + (minutes * 60 * 1000));
                $.cookie('welcome_modal', date, {path: '/', expire: date});//Set the cookies
                this.handleModal(true);
            },
            optionModal: function () {
                var options = {
                    type: 'popup',
                    modalClass: 'welcome_default_modal',
                    title: 'Welcome',
                    responsive: true,
                    innerScroll: false,
                    buttons: [{
                        text: $.mage.__('Close'),
                        class: '',
                        click: function () {
                            this.closeModal();
                        }
                    }]
                }
                var popup = modal(options, "#welcome_default");
            }

        }
        return function (target) {
            return target.extend(mixin)
        }
    }
);

