"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PollRead = _interopRequireDefault(require("./PollRead"));

var _ProposalResultRead = _interopRequireDefault(require("./ProposalResultRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ResultRead model module.
 * @module MieuxVoter/model/ResultRead
 * @version 0.0.0-dev
 */
var ResultRead = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResultRead</code>.
   * A Result of a Majority Judgment Poll.  Holds a leaderboard of the proposals.
   * @alias module:MieuxVoter/model/ResultRead
   */
  function ResultRead() {
    _classCallCheck(this, ResultRead);

    ResultRead.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResultRead, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ResultRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/ResultRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/ResultRead} The populated <code>ResultRead</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResultRead();

        if (data.hasOwnProperty('poll')) {
          obj['poll'] = _PollRead["default"].constructFromObject(data['poll']);
        }

        if (data.hasOwnProperty('algorithm')) {
          obj['algorithm'] = _ApiClient["default"].convertToType(data['algorithm'], 'String');
        }

        if (data.hasOwnProperty('leaderboard')) {
          obj['leaderboard'] = _ApiClient["default"].convertToType(data['leaderboard'], [_ProposalResultRead["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ResultRead;
}();
/**
 * @member {module:MieuxVoter/model/PollRead} poll
 */


ResultRead.prototype['poll'] = undefined;
/**
 * The name of the algorithm used to derive this Result.
 * @member {String} algorithm
 */

ResultRead.prototype['algorithm'] = undefined;
/**
 * In order, each Proposals' Result.  In extreme, low-participation polls, some Proposals may have the same rank ; in that case, their order should be the order they were added to the poll.
 * @member {Array.<module:MieuxVoter/model/ProposalResultRead>} leaderboard
 */

ResultRead.prototype['leaderboard'] = undefined;
var _default = ResultRead;
exports["default"] = _default;