define(
    [
        'jquery',
        'ko',
        'Magento_Ui/js/modal/modal'

    ], function ($, ko, modal) {

        var mixin = {
            initialize: function () {
                this.hasCookies = ko.observable(false);
                this.hasCookiModal();
            },

            hasCookiModal: function () {
                let temp = $.cookie("welcome_modal");
                if (temp) {
                    this.hasCookies(true);
                } else {
                    this.hasCookies(false);
                }
            },
            openModal: function () {
                $("#welcome_default").modal('openModal');
                var date = new Date();
                var minutes = 2;
                date.setTime(date.getTime() + (minutes * 60 * 1000));
                $.cookie('newsletter_modal', date, { path: '/',expire: date });//Set the cookies
            }
        }
        return function (target) {
            return target.extend(mixin)
        }
    }
);

