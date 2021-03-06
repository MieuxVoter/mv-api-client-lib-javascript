"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GradejsonldRead = _interopRequireDefault(require("./GradejsonldRead"));

var _ProposaljsonldRead = _interopRequireDefault(require("./ProposaljsonldRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PolljsonldRead model module.
 * @module MieuxVoter/model/PolljsonldRead
 * @version 0.0.0-dev
 */
var PolljsonldRead = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PolljsonldRead</code>.
   * A Liquid Majority Judgment Poll.
   * @alias module:MieuxVoter/model/PolljsonldRead
   * @param subject {String} The subject of the poll. Careful consideration should be taken in the writing of this.
   */
  function PolljsonldRead(subject) {
    _classCallCheck(this, PolljsonldRead);

    PolljsonldRead.initialize(this, subject);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PolljsonldRead, null, [{
    key: "initialize",
    value: function initialize(obj, subject) {
      obj['subject'] = subject;
    }
    /**
     * Constructs a <code>PolljsonldRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/PolljsonldRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/PolljsonldRead} The populated <code>PolljsonldRead</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PolljsonldRead();

        if (data.hasOwnProperty('@context')) {
          obj['@context'] = _ApiClient["default"].convertToType(data['@context'], 'String');
        }

        if (data.hasOwnProperty('@id')) {
          obj['@id'] = _ApiClient["default"].convertToType(data['@id'], 'String');
        }

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('slug')) {
          obj['slug'] = _ApiClient["default"].convertToType(data['slug'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _ApiClient["default"].convertToType(data['subject'], 'String');
        }

        if (data.hasOwnProperty('proposals')) {
          obj['proposals'] = _ApiClient["default"].convertToType(data['proposals'], [_ProposaljsonldRead["default"]]);
        }

        if (data.hasOwnProperty('grades')) {
          obj['grades'] = _ApiClient["default"].convertToType(data['grades'], [_GradejsonldRead["default"]]);
        }

        if (data.hasOwnProperty('canGenerateInvitations')) {
          obj['canGenerateInvitations'] = _ApiClient["default"].convertToType(data['canGenerateInvitations'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return PolljsonldRead;
}();
/**
 * @member {String} @context
 */


PolljsonldRead.prototype['@context'] = undefined;
/**
 * @member {String} @id
 */

PolljsonldRead.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

PolljsonldRead.prototype['@type'] = undefined;
/**
 * A Universally Unique IDentifier (version 4) like b7e7d328-c1fb-4af7-b258-23d08f6ed2d4 and you may use the short prefix to fetch a poll as well, like b7e7d328 or even b7e-7d-328 to make it more human-legible.
 * @member {String} uuid
 */

PolljsonldRead.prototype['uuid'] = undefined;
/**
 * A unique, short, human-friendly identifier for the Poll.
 * @member {String} slug
 */

PolljsonldRead.prototype['slug'] = undefined;
/**
 * The scope defines how and by whom the poll is accessible: `public`: Everyone may access the poll, and it will be publicly listed ; `unlisted`: Everyone may access the poll if they know its URI ; `private`: Only invited participants may participate ; The default scope is `unlisted`.
 * @member {String} scope
 */

PolljsonldRead.prototype['scope'] = undefined;
/**
 * The subject of the poll. Careful consideration should be taken in the writing of this.
 * @member {String} subject
 */

PolljsonldRead.prototype['subject'] = undefined;
/**
 * A list of Proposals to judge, that MUST contain at least two proposals, and can have at most 256 proposals but that upper limit is arbitrary and may wildly vary after benchmark and discussion.
 * @member {Array.<module:MieuxVoter/model/ProposaljsonldRead>} proposals
 */

PolljsonldRead.prototype['proposals'] = undefined;
/**
 * A list of Grades that Participants may give to Proposals ??? That list MUST contain at least two Grades, and at most 16 (another arbitrary limit to discuss).
 * @member {Array.<module:MieuxVoter/model/GradejsonldRead>} grades
 */

PolljsonldRead.prototype['grades'] = undefined;
/**
 * Can the current user generate invitations for this poll or not? Helps clients show the relevant links and forms.
 * @member {Boolean} canGenerateInvitations
 */

PolljsonldRead.prototype['canGenerateInvitations'] = undefined;
var _default = PolljsonldRead;
exports["default"] = _default;