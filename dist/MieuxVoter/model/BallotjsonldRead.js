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
 * The BallotjsonldRead model module.
 * @module MieuxVoter/model/BallotjsonldRead
 * @version 0.0.0-dev
 */
var BallotjsonldRead = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BallotjsonldRead</code>.
   * A Ballot holds a (single) Judgment on a Proposal, by a Participant of a Poll.
   * @alias module:MieuxVoter/model/BallotjsonldRead
   */
  function BallotjsonldRead() {
    _classCallCheck(this, BallotjsonldRead);

    BallotjsonldRead.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BallotjsonldRead, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BallotjsonldRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/BallotjsonldRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/BallotjsonldRead} The populated <code>BallotjsonldRead</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BallotjsonldRead();

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

        if (data.hasOwnProperty('proposal')) {
          obj['proposal'] = _ProposaljsonldRead["default"].constructFromObject(data['proposal']);
        }

        if (data.hasOwnProperty('grade')) {
          obj['grade'] = _GradejsonldRead["default"].constructFromObject(data['grade']);
        }
      }

      return obj;
    }
  }]);

  return BallotjsonldRead;
}();
/**
 * @member {String} @context
 */


BallotjsonldRead.prototype['@context'] = undefined;
/**
 * @member {String} @id
 */

BallotjsonldRead.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

BallotjsonldRead.prototype['@type'] = undefined;
/**
 * Universally Unique IDentifier of the Ballot.
 * @member {String} uuid
 */

BallotjsonldRead.prototype['uuid'] = undefined;
/**
 * @member {module:MieuxVoter/model/ProposaljsonldRead} proposal
 */

BallotjsonldRead.prototype['proposal'] = undefined;
/**
 * @member {module:MieuxVoter/model/GradejsonldRead} grade
 */

BallotjsonldRead.prototype['grade'] = undefined;
var _default = BallotjsonldRead;
exports["default"] = _default;