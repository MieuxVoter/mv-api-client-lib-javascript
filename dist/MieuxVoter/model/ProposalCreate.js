"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PollCreate = _interopRequireDefault(require("./PollCreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProposalCreate model module.
 * @module MieuxVoter/model/ProposalCreate
 * @version 0.0.0-dev
 */
var ProposalCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProposalCreate</code>.
   * A Proposal (aka. Candidate) of a Poll, whom any Participant can give a Grade to.
   * @alias module:MieuxVoter/model/ProposalCreate
   */
  function ProposalCreate() {
    _classCallCheck(this, ProposalCreate);

    ProposalCreate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProposalCreate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProposalCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/ProposalCreate} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/ProposalCreate} The populated <code>ProposalCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProposalCreate();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('poll')) {
          obj['poll'] = _PollCreate["default"].constructFromObject(data['poll']);
        }
      }

      return obj;
    }
  }]);

  return ProposalCreate;
}();
/**
 * The title of the proposal.
 * @member {String} title
 */


ProposalCreate.prototype['title'] = undefined;
/**
 * @member {module:MieuxVoter/model/PollCreate} poll
 */

ProposalCreate.prototype['poll'] = undefined;
var _default = ProposalCreate;
exports["default"] = _default;