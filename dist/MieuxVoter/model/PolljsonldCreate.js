"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GradejsonldCreate = _interopRequireDefault(require("./GradejsonldCreate"));

var _ProposaljsonldCreate = _interopRequireDefault(require("./ProposaljsonldCreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PolljsonldCreate model module.
 * @module MieuxVoter/model/PolljsonldCreate
 * @version 0.0.0-dev
 */
var PolljsonldCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PolljsonldCreate</code>.
   * A Liquid Majority Judgment Poll.
   * @alias module:MieuxVoter/model/PolljsonldCreate
   * @param subject {String} The subject of the poll. Careful consideration should be taken in the writing of this.
   */
  function PolljsonldCreate(subject) {
    _classCallCheck(this, PolljsonldCreate);

    PolljsonldCreate.initialize(this, subject);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PolljsonldCreate, null, [{
    key: "initialize",
    value: function initialize(obj, subject) {
      obj['subject'] = subject;
    }
    /**
     * Constructs a <code>PolljsonldCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/PolljsonldCreate} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/PolljsonldCreate} The populated <code>PolljsonldCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PolljsonldCreate();

        if (data.hasOwnProperty('@context')) {
          obj['@context'] = _ApiClient["default"].convertToType(data['@context'], 'String');
        }

        if (data.hasOwnProperty('@id')) {
          obj['@id'] = _ApiClient["default"].convertToType(data['@id'], 'String');
        }

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
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
          obj['proposals'] = _ApiClient["default"].convertToType(data['proposals'], [_ProposaljsonldCreate["default"]]);
        }

        if (data.hasOwnProperty('grades')) {
          obj['grades'] = _ApiClient["default"].convertToType(data['grades'], [_GradejsonldCreate["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PolljsonldCreate;
}();
/**
 * @member {String} @context
 */


PolljsonldCreate.prototype['@context'] = undefined;
/**
 * @member {String} @id
 */

PolljsonldCreate.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

PolljsonldCreate.prototype['@type'] = undefined;
/**
 * A unique, short, human-friendly identifier for the Poll.
 * @member {String} slug
 */

PolljsonldCreate.prototype['slug'] = undefined;
/**
 * The scope defines how and by whom the poll is accessible: `public`: Everyone may access the poll, and it will be publicly listed ; `unlisted`: Everyone may access the poll if they know its URI ; `private`: Only invited participants may participate ; The default scope is `unlisted`.
 * @member {String} scope
 */

PolljsonldCreate.prototype['scope'] = undefined;
/**
 * The subject of the poll. Careful consideration should be taken in the writing of this.
 * @member {String} subject
 */

PolljsonldCreate.prototype['subject'] = undefined;
/**
 * A list of Proposals to judge, that MUST contain at least two proposals, and can have at most 256 proposals but that upper limit is arbitrary and may wildly vary after benchmark and discussion.
 * @member {Array.<module:MieuxVoter/model/ProposaljsonldCreate>} proposals
 */

PolljsonldCreate.prototype['proposals'] = undefined;
/**
 * A list of Grades that Participants may give to Proposals – That list MUST contain at least two Grades, and at most 16 (another arbitrary limit to discuss).
 * @member {Array.<module:MieuxVoter/model/GradejsonldCreate>} grades
 */

PolljsonldCreate.prototype['grades'] = undefined;
var _default = PolljsonldCreate;
exports["default"] = _default;