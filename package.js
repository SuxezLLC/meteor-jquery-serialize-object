Package.describe({
    name: 'suxez:jquery-serialize-object',
    version: '1.0.0',
    // Brief, one-line summary of the package.
    summary: 'Provides Ben Alman\'s jquery serializeObject method.' ,
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    api.use('jquery', 'client');
    api.addFiles('jquery.ba-serializeobject.js', 'client');
});
