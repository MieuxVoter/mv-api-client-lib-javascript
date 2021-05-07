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
 * The ProposalGradeResultjsonldRead model module.
 * @module MieuxVoter/model/ProposalGradeResultjsonldRead
 * @version 0.0.0-dev
 */
var ProposalGradeResultjsonldRead = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProposalGradeResultjsonldRead</code>.
   * Results for one Grade of one Proposal, basically the tally of Ballots for this Grade and Proposal, but there might be more information in there in the future.
   * @alias module:MieuxVoter/model/ProposalGradeResultjsonldRead
   */
  function ProposalGradeResultjsonldRead() {
    _classCallCheck(this, ProposalGradeResultjsonldRead);

    ProposalGradeResultjsonldRead.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProposalGradeResultjsonldRead, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProposalGradeResultjsonldRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/ProposalGradeResultjsonldRead} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/ProposalGradeResultjsonldRead} The populated <code>ProposalGradeResultjsonldRead</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProposalGradeResultjsonldRead();

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
          obj['grade'] = _ApiClient["default"].convertToType(data['grade'], 'String');
        }

        if (data.hasOwnProperty('proposal')) {
          obj['proposal'] = _ApiClient["default"].convertToType(data['proposal'], 'String');
        }

        if (data.hasOwnProperty('tally')) {
          obj['tally'] = _ApiClient["default"].convertToType(data['tally'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ProposalGradeResultjsonldRead;
}();
/**
 * @member {String} @context
 */


ProposalGradeResultjsonldRead.prototype['@context'] = undefined;
/**
 * @member {String} @id
 */

ProposalGradeResultjsonldRead.prototype['@id'] = undefined;
/**
 * @member {String} @type
 */

ProposalGradeResultjsonldRead.prototype['@type'] = undefined;
/**
 * The IRI of the Grade this Result is about.
 * @member {String} grade
 */

ProposalGradeResultjsonldRead.prototype['grade'] = undefined;
/**
 * The IRI of the Proposal this Result is about.
 * @member {String} proposal
 */

ProposalGradeResultjsonldRead.prototype['proposal'] = undefined;
/**
 * Amount of Ballots emitted for this Grade on the Proposal.
 * @member {Number} tally
 */

ProposalGradeResultjsonldRead.prototype['tally'] = undefined;
var _default = ProposalGradeResultjsonldRead;
exports["default"] = _default;