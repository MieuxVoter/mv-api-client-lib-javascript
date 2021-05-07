"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GradeCreate = _interopRequireDefault(require("./GradeCreate"));

var _ProposalCreate = _interopRequireDefault(require("./ProposalCreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PollCreate model module.
 * @module MieuxVoter/model/PollCreate
 * @version 0.0.0-dev
 */
var PollCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PollCreate</code>.
   * A Liquid Majority Judgment Poll.
   * @alias module:MieuxVoter/model/PollCreate
   * @param subject {String} The subject of the poll. Careful consideration should be taken in the writing of this.
   */
  function PollCreate(subject) {
    _classCallCheck(this, PollCreate);

    PollCreate.initialize(this, subject);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PollCreate, null, [{
    key: "initialize",
    value: function initialize(obj, subject) {
      obj['subject'] = subject;
    }
    /**
     * Constructs a <code>PollCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/PollCreate} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/PollCreate} The populated <code>PollCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PollCreate();

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
          obj['proposals'] = _ApiClient["default"].convertToType(data['proposals'], [_ProposalCreate["default"]]);
        }

        if (data.hasOwnProperty('grades')) {
          obj['grades'] = _ApiClient["default"].convertToType(data['grades'], [_GradeCreate["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PollCreate;
}();
/**
 * A unique, short, human-friendly identifier for the Poll.
 * @member {String} slug
 */


PollCreate.prototype['slug'] = undefined;
/**
 * The scope defines how and by whom the poll is accessible: `public`: Everyone may access the poll, and it will be publicly listed ; `unlisted`: Everyone may access the poll if they know its URI ; `private`: Only invited participants may participate ; The default scope is `unlisted`.
 * @member {String} scope
 */

PollCreate.prototype['scope'] = undefined;
/**
 * The subject of the poll. Careful consideration should be taken in the writing of this.
 * @member {String} subject
 */

PollCreate.prototype['subject'] = undefined;
/**
 * A list of Proposals to judge, that MUST contain at least two proposals, and can have at most 256 proposals but that upper limit is arbitrary and may wildly vary after benchmark and discussion.
 * @member {Array.<module:MieuxVoter/model/ProposalCreate>} proposals
 */

PollCreate.prototype['proposals'] = undefined;
/**
 * A list of Grades that Participants may give to Proposals – That list MUST contain at least two Grades, and at most 16 (another arbitrary limit to discuss).
 * @member {Array.<module:MieuxVoter/model/GradeCreate>} grades
 */

PollCreate.prototype['grades'] = undefined;
var _default = PollCreate;
exports["default"] = _default;