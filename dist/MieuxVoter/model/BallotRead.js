"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GradeRead = _interopRequireDefault(require("./GradeRead"));

var _ProposalRead = _interopRequireDefault(require("./ProposalRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BallotRead model module.
 * @module MieuxVoter/model/BallotRead
 * @version 0.0.0-dev
 */
var BallotRead = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BallotRead</code>.
   * A Ballot holds a (single) Judgment on a Proposal, by a Participant of a Poll.
   * @alias module:MieuxVoter/model/BallotRead
   */
  function BallotRead() {
    _classCallCheck(this, BallotRead);

    BallotRead.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BallotRead, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BallotRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/BallotRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/BallotRead} The populated <code>BallotRead</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BallotRead();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('proposal')) {
          obj['proposal'] = _ProposalRead["default"].constructFromObject(data['proposal']);
        }

        if (data.hasOwnProperty('grade')) {
          obj['grade'] = _GradeRead["default"].constructFromObject(data['grade']);
        }
      }

      return obj;
    }
  }]);

  return BallotRead;
}();
/**
 * Universally Unique IDentifier of the Ballot.
 * @member {String} uuid
 */


BallotRead.prototype['uuid'] = undefined;
/**
 * @member {module:MieuxVoter/model/ProposalRead} proposal
 */

BallotRead.prototype['proposal'] = undefined;
/**
 * @member {module:MieuxVoter/model/GradeRead} grade
 */

BallotRead.prototype['grade'] = undefined;
var _default = BallotRead;
exports["default"] = _default;