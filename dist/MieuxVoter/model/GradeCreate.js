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
 * The GradeCreate model module.
 * @module MieuxVoter/model/GradeCreate
 * @version 0.0.0-dev
 */
var GradeCreate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GradeCreate</code>.
   * Grades are attributed to Proposals by Participants, in Ballots.
   * @alias module:MieuxVoter/model/GradeCreate
   */
  function GradeCreate() {
    _classCallCheck(this, GradeCreate);

    GradeCreate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GradeCreate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GradeCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:MieuxVoter/model/GradeCreate} obj Optional instance to populate.
     * @return {module:MieuxVoter/model/GradeCreate} The populated <code>GradeCreate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GradeCreate();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('level')) {
          obj['level'] = _ApiClient["default"].convertToType(data['level'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GradeCreate;
}();
/**
 * @member {String} name
 */


GradeCreate.prototype['name'] = undefined;
/**
 * Used to compare grades procedurally.  \\n Usually starts at zero (0) and ends at <MAXIMUM_GRADES>-1.  \\n Grades of the same poll MUST have unique levels between themselves.
 * @member {Number} level
 */

GradeCreate.prototype['level'] = undefined;
var _default = GradeCreate;
exports["default"] = _default;