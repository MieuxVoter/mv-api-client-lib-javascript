"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GradejsonldRead = _interopRequireDefault(require("./GradejsonldRead"));

var _ProposalGradeResultRead = _interopRequireDefault(require("./ProposalGradeResultRead"));

var _ProposaljsonldRead = _interopRequireDefault(require("./ProposaljsonldRead"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProposalResultjsonldRead model module.
 * @module MieuxVoter/model/ProposalResultjsonldRead
 * @version 0.0.0-dev
 */
var ProposalResultjsonldRead = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProposalResultjsonldRead</code>.
   * The ranked Result of one Proposal in a Poll.
   * @alias module:MieuxVoter/model/ProposalResultjsonldRead
   */
  function ProposalResultjsonldRead() {
    _classCallCheck(this, ProposalResultjsonldRead);

    ProposalResultjsonldRead.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProposalResultjsonldRead, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProposalResultjsonldRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/ProposalResultjsonldRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/ProposalResultjsonldRead} The populated <code>ProposalResultjsonldRead</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProposalResultjsonldRead();

        if (data.hasOwnProperty('@context')) {
          obj['@context'] = _ApiClient["default"].convertToType(data['@context'], 'String');
        }

        if (data.hasOwnProperty('@id')) {
          obj['@id'] = _ApiClient["default"].convertToType(data['@id'], 'String');
        }

        if (data.hasOwnProperty('@type')) {
          obj['@type'] = _ApiClient["default"].convertToType(data['@type'], 'String');
        }

        if (data.hasOwnProperty('proposal')) {
          obj['proposal'] = _ProposaljsonldRead["default"].constructFromObject(data['proposal']);
        }

        if (data.hasOwnProperty('rank')) {
          obj['rank'] = _ApiClient["default"].convertToType(data['rank'], 'Number');
        }

        if (data.hasOwnProperty('medianGrade')) {
          obj['medianGrade'] = _GradejsonldRead["default"].constructFromObject(data['medianGrade']);
        }

        if (data.hasOwnProperty('tally')) {
          obj['tally'] = _ApiClient["default"].convertToType(data['tally'], 'Number');
        }

        if (data.hasOwnProperty('gradesResults')) {
          obj['gradesResults'] = _ApiClient["default"].convertToType(data['gradesResults'], [_ProposalGradeResultRead["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ProposalResultjsonldRead;
}();
/**
 * @member {String} @context
 */


ProposalResultjsonldRead.prototype['@context'] = undefined;
/**
 * @member {String} @id
 */

ProposalResultjsonldRead.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

ProposalResultjsonldRead.prototype['@type'] = undefined;
/**
 * @member {module:MieuxVoter/model/ProposaljsonldRead} proposal
 */

ProposalResultjsonldRead.prototype['proposal'] = undefined;
/**
 * The computed rank of the Proposal in the Poll — Rank starts at 1 and goes upwards, and two proposals may have the same rank.
 * @member {Number} rank
 */

ProposalResultjsonldRead.prototype['rank'] = undefined;
/**
 * @member {module:MieuxVoter/model/GradejsonldRead} medianGrade
 */

ProposalResultjsonldRead.prototype['medianGrade'] = undefined;
/**
 * Total Amount of Ballots emitted for the Proposal this Result is about.
 * @member {Number} tally
 */

ProposalResultjsonldRead.prototype['tally'] = undefined;
/**
 * Results for each Grade, on this Proposal — This is the merit profile of the Proposal.
 * @member {Array.<module:MieuxVoter/model/ProposalGradeResultRead>} gradesResults
 */

ProposalResultjsonldRead.prototype['gradesResults'] = undefined;
var _default = ProposalResultjsonldRead;
exports["default"] = _default;