/**
 * Majority Judgment API
 * This is a **deliberation service** using **majority judgment** polling. It's **libre software** ([source](https://github.com/mieuxvoter)) made and maintained by [MieuxVoter.fr](https://mieuxvoter.fr). You're browsing the API documentation and sandbox.  ## Use one of the known clients  - TODO: add an URL to a client of the API   ## Try it out the hard way  ### Create an account  You will need a user account to interact with polls. Head to **Registration** → `POST /users` below. Click _Try it out_, set your desired credentials, and execute the query. Scroll down to see the response.  ### Authenticate  Use your credentials in the **Login** → `POST /_jwt`, and the API will return a Json Web Token valid for one hour. Copy the token (not the whole response, and without quotes) in the field behind the `Authorize 🔒` button.  ### Create a poll  **Poll** → `POST /polls`  Keep the response, you'll need the uuids.  > TODO: document invitation generation  ### Submit judgments  **Ballot** → `POST /polls/{pollId}/proposals/{proposalId}/ballots`  One request per proposal, for now.  We plan on making an endpoint to submit them all at once.  ### Collect the results  **Result** → `GET /polls/{id}/result`  ## Use a generated client library  - for php  (link!) - for typescript-node  (link!!) - …  There are clients we can generate for most languages. Get in touch if you'd like one in particular! Or clone this project and use `bin/generate-client.bash -t whatever`. 
 *
 * The version of the OpenAPI document: 0.0.0-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/MieuxVoter/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/MieuxVoter/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MvApiClientLib);
  }
}(this, function(expect, MvApiClientLib) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MvApiClientLib.PolljsonldCreate();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PolljsonldCreate', function() {
    it('should create an instance of PolljsonldCreate', function() {
      // uncomment below and update the code to test PolljsonldCreate
      //var instane = new MvApiClientLib.PolljsonldCreate();
      //expect(instance).to.be.a(MvApiClientLib.PolljsonldCreate);
    });

    it('should have the property context (base name: "@context")', function() {
      // uncomment below and update the code to test the property context
      //var instance = new MvApiClientLib.PolljsonldCreate();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "@id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MvApiClientLib.PolljsonldCreate();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "@type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new MvApiClientLib.PolljsonldCreate();
      //expect(instance).to.be();
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instance = new MvApiClientLib.PolljsonldCreate();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new MvApiClientLib.PolljsonldCreate();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new MvApiClientLib.PolljsonldCreate();
      //expect(instance).to.be();
    });

    it('should have the property proposals (base name: "proposals")', function() {
      // uncomment below and update the code to test the property proposals
      //var instance = new MvApiClientLib.PolljsonldCreate();
      //expect(instance).to.be();
    });

    it('should have the property grades (base name: "grades")', function() {
      // uncomment below and update the code to test the property grades
      //var instance = new MvApiClientLib.PolljsonldCreate();
      //expect(instance).to.be();
    });

  });

}));
