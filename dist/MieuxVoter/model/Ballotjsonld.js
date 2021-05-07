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
 * The Ballotjsonld model module.
 * @module MieuxVoter/model/Ballotjsonld
 * @version 0.0.0-dev
 */
var Ballotjsonld = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Ballotjsonld</code>.
   * A Ballot holds a (single) Judgment on a Proposal, by a Participant of a Poll.
   * @alias module:MieuxVoter/model/Ballotjsonld
   */
  function Ballotjsonld() {
    _classCallCheck(this, Ballotjsonld);

    Ballotjsonld.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Ballotjsonld, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Ballotjsonld</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/Ballotjsonld} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/Ballotjsonld} The populated <code>Ballotjsonld</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Ballotjsonld();

        if (data.hasOwnProperty('@id')) {
          obj['@id'] = _ApiClient["default"].convertToType(data['@id'], 'String');
        }

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
        }

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

  return Ballotjsonld;
}();
/**
 * @member {String} @id
 */


Ballotjsonld.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

Ballotjsonld.prototype['@type'] = undefined;
/**
 * Universally Unique IDentifier of the Ballot.
 * @member {String} uuid
 */

Ballotjsonld.prototype['uuid'] = undefined;
/**
 * Internal, incrementing numerical id, unused by ApiPlatform but used in tallying to ignore old|stale|overriden ballots by fetching the highest id, since ballots are immutable and new submissions after opinion changes create new ballots.
 * @member {Number} id
 */

Ballotjsonld.prototype['id'] = undefined;
/**
 * The Majority Judgment Poll Proposal the author is giving a grade to.
 * @member {String} proposal
 */

Ballotjsonld.prototype['proposal'] = undefined;
/**
 * The Grade attributed by the Judge to the Proposal.
 * @member {String} grade
 */

Ballotjsonld.prototype['grade'] = undefined;
/**
 * @member {String} participant
 */

Ballotjsonld.prototype['participant'] = undefined;
/**
 * @member {Date} createdAt
 */

Ballotjsonld.prototype['createdAt'] = undefined;
var _default = Ballotjsonld;
exports["default"] = _default;