function config ($logProvider, toastrConfig, themeManagerProvider, theme, $touchProvider, env, $locationProvider,
  $httpProvider, $translateProvider, CgMailChimpServiceProvider) {
  'ngInject';

  $touchProvider.enabled = true;

  themeManagerProvider.theme = theme;

  $logProvider.debugEnabled(env !== 'production');

  $locationProvider.html5Mode(true);
  $httpProvider.useApplyAsync(true);

  angular.extend(toastrConfig, {
    timeOut: 2000
  });

  //Mailchimp
  CgMailChimpServiceProvider.setConfig({
      username: 'volumio',
      dc: 'us11',
      u: '64b4a843c27713ee9da781aa9',
      id:'030f96ce5c'
  });

  //i18n Configs
  $translateProvider
    .useStaticFilesLoader({
      prefix: 'app/i18n/locale-',
      suffix: '.json'
    })
    .registerAvailableLanguageKeys(['en', 'de', 'it', 'fr', 'ja', 'nl'], {
      'en-US': 'en',
      'en-UK': 'en',
      'de-DE': 'de',
      'de-CH': 'de',
      'de': 'de',
      'it': 'it',
      'fr': 'fr',
      'ja': 'ja',
      'nl': 'nl'
    })
    //Back end send default language, this improve translation consistency
    // .determinePreferredLanguage()
    // .preferredLanguage('en')
    .fallbackLanguage('en');
  $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
}

export default config;
