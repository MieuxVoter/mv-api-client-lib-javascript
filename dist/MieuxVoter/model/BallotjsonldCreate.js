"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AnyOfGradejsonldCreate = _interopRequireDefault(require("./AnyOfGradejsonldCreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BallotjsonldCreate model module.
 * @module MieuxVoter/model/BallotjsonldCreate
 * @version 0.0.0-dev
 */
var BallotjsonldCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BallotjsonldCreate</code>.
   * A Ballot holds a (single) Judgment on a Proposal, by a Participant of a Poll.
   * @alias module:MieuxVoter/model/BallotjsonldCreate
   */
  function BallotjsonldCreate() {
    _classCallCheck(this, BallotjsonldCreate);

    BallotjsonldCreate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BallotjsonldCreate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BallotjsonldCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/BallotjsonldCreate} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/BallotjsonldCreate} The populated <code>BallotjsonldCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BallotjsonldCreate();

        if (data.hasOwnProperty('@context')) {
          obj['@context'] = _ApiClient["default"].convertToType(data['@context'], 'String');
        }

        if (data.hasOwnProperty('@id')) {
          obj['@id'] = _ApiClient["default"].convertToType(data['@id'], 'String');
        }

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
        }

        if (data.hasOwnProperty('grade')) {
          obj['grade'] = _ApiClient["default"].convertToType(data['grade'], _AnyOfGradejsonldCreate["default"]);
        }
      }

      return obj;
    }
  }]);

  return BallotjsonldCreate;
}();
/**
 * @member {String} @context
 */


BallotjsonldCreate.prototype['@context'] = undefined;
/**
 * @member {String} @id
 */

BallotjsonldCreate.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

BallotjsonldCreate.prototype['@type'] = undefined;
/**
 * The Grade attributed by the Judge to the Proposal.
 * @member {module:MieuxVoter/model/AnyOfGradejsonldCreate} grade
 */

BallotjsonldCreate.prototype['grade'] = undefined;
var _default = BallotjsonldCreate;
exports["default"] = _default;