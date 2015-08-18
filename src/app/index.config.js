(function() {
  'use strict';

  angular
    .module('webSite')
    .config(appConfig);

  angular
    .module('i18n')
    .config(i18nConfig);

  /** @ngInject */
  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/main/main.html',
        controller: 'MainCtrl'
      });
  }

  function i18nConfig(i18nServiceProvider) {
    i18nServiceProvider.setLocales({
      'default': '/assets/i18n/resources-locale_en_US.json',
      'en': '/assets/i18n/resources-locale_en_US.json',
      'fr': '/assets/i18n/resources-locale_fr.json',
      'de': '/assets/i18n/resources-locale_de.json'
    }, true);
  }

})();
