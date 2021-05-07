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
 * The Ballot model module.
 * @module MieuxVoter/model/Ballot
 * @version 0.0.0-dev
 */
var Ballot = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Ballot</code>.
   * A Ballot holds a (single) Judgment on a Proposal, by a Participant of a Poll.
   * @alias module:MieuxVoter/model/Ballot
   */
  function Ballot() {
    _classCallCheck(this, Ballot);

    Ballot.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Ballot, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Ballot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/Ballot} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/Ballot} The populated <code>Ballot</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Ballot();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('proposal')) {
          obj['proposal'] = _ApiClient["default"].convertToType(data['proposal'], 'String');
        }

        if (data.hasOwnProperty('grade')) {
          obj['grade'] = _ApiClient["default"].convertToType(data['grade'], 'String');
        }

        if (data.hasOwnProperty('participant')) {
          obj['participant'] = _ApiClient["default"].convertToType(data['participant'], 'String');
        }

        if (data.hasOwnProperty('createdAt')) {
          obj['createdAt'] = _ApiClient["default"].convertToType(data['createdAt'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return Ballot;
}();
/**
 * Universally Unique IDentifier of the Ballot.
 * @member {String} uuid
 */


Ballot.prototype['uuid'] = undefined;
/**
 * Internal, incrementing numerical id, unused by ApiPlatform but used in tallying to ignore old|stale|overriden ballots by fetching the highest id, since ballots are immutable and new submissions after opinion changes create new ballots.
 * @member {Number} id
 */

Ballot.prototype['id'] = undefined;
/**
 * The Majority Judgment Poll Proposal the author is giving a grade to.
 * @member {String} proposal
 */

Ballot.prototype['proposal'] = undefined;
/**
 * The Grade attributed by the Judge to the Proposal.
 * @member {String} grade
 */

Ballot.prototype['grade'] = undefined;
/**
 * @member {String} participant
 */

Ballot.prototype['participant'] = undefined;
/**
 * @member {Date} createdAt
 */

Ballot.prototype['createdAt'] = undefined;
var _default = Ballot;
exports["default"] = _default;