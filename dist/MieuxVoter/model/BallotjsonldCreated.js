"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BallotjsonldCreated model module.
 * @module MieuxVoter/model/BallotjsonldCreated
 * @version 0.0.0-dev
 */
var BallotjsonldCreated = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BallotjsonldCreated</code>.
   * A Ballot holds a (single) Judgment on a Proposal, by a Participant of a Poll.
   * @alias module:MieuxVoter/model/BallotjsonldCreated
   */
  function BallotjsonldCreated() {
    _classCallCheck(this, BallotjsonldCreated);

    BallotjsonldCreated.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BallotjsonldCreated, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BallotjsonldCreated</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/BallotjsonldCreated} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/BallotjsonldCreated} The populated <code>BallotjsonldCreated</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BallotjsonldCreated();

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
          obj['proposal'] = _ApiClient["default"].convertToType(data['proposal'], 'String');
        }

        if (data.hasOwnProperty('grade')) {
          obj['grade'] = _ApiClient["default"].convertToType(data['grade'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BallotjsonldCreated;
}();
/**
 * @member {String} @context
 */


BallotjsonldCreated.prototype['@context'] = undefined;
/**
 * @member {String} @id
 */

BallotjsonldCreated.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

BallotjsonldCreated.prototype['@type'] = undefined;
/**
 * Universally Unique IDentifier of the Ballot.
 * @member {String} uuid
 */

BallotjsonldCreated.prototype['uuid'] = undefined;
/**
 * The Majority Judgment Poll Proposal the author is giving a grade to.
 * @member {String} proposal
 */

BallotjsonldCreated.prototype['proposal'] = undefined;
/**
 * The Grade attributed by the Judge to the Proposal.
 * @member {String} grade
 */

BallotjsonldCreated.prototype['grade'] = undefined;
var _default = BallotjsonldCreated;
exports["default"] = _default;